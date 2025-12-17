import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { WordSearchLevel } from '../../../data/hebrewData'; 
import WordSearchBoard from './WordSearchBoard';
import { GameContainer, WordList, WordItem, RestartButton } from './WordSearchGameStyled';
import { triggerConfetti } from '../../../utils/confetti';
import { motion, AnimatePresence } from 'framer-motion';

interface WordSearchGameProps {
  level: WordSearchLevel;
  language: 'he' | 'en';
  onRestart?: () => void;
}

export default function WordSearchGame({ level, language, onRestart }: WordSearchGameProps) {
  const { t } = useTranslation();
  const { gridSize, words } = level;
  
  const [grid, setGrid] = useState<string[][]>([]);
  const [activeWords, setActiveWords] = useState<typeof words>([]);  // Only words actually on the grid
  const [foundWords, setFoundWords] = useState<string[]>([]);
  // Store found cells as "r,c" strings
  const [foundCells, setFoundCells] = useState<Set<string>>(new Set());
  
  // Selection State
  const [selectionStart, setSelectionStart] = useState<{ r: number, c: number } | null>(null);
  const [currentSelection, setCurrentSelection] = useState<string[]>([]); // "r,c" strings

  // Generate Grid
  useEffect(() => {
    const placedWords = generateGrid();
    setActiveWords(placedWords);
  }, [level]);

  const generateGrid = () => {
    // 1. Initialize empty grid
    const newGrid = Array(gridSize).fill(null).map(() => Array(gridSize).fill(''));
    
    // 2. Place words
    // Helper to check if word fits
    const canPlace = (r: number, c: number, dr: number, dc: number, word: string) => {
        for (let i = 0; i < word.length; i++) {
            const nr = r + i * dr;
            const nc = c + i * dc;
            if (nr < 0 || nr >= gridSize || nc < 0 || nc >= gridSize) return false;
            // Overlap is fine if same letter
            if (newGrid[nr][nc] !== '' && newGrid[nr][nc] !== word[i]) return false;
        }
        return true;
    };

    const place = (r: number, c: number, dr: number, dc: number, word: string) => {
        for (let i = 0; i < word.length; i++) {
            newGrid[r + i * dr][c + i * dc] = word[i];
        }
    };

    // Directions: Horizontal, Vertical, Diagonal
    const directions = [
        { dr: 0, dc: 1 }, // Right
        { dr: 1, dc: 0 }, // Down
        { dr: 1, dc: 1 }, // Diagonal Down-Right
    ];

    // Try to place each word
    // Sort by length desc to place big ones first
    const sortedWords = [...words].sort((a, b) => b.word.length - a.word.length);
    
    // Track successfully placed words
    const placedWords: typeof words = [];
    
    for (const w of sortedWords) {
        let placed = false;
        let attempts = 0;
        while (!placed && attempts < 100) {
            const dir = directions[Math.floor(Math.random() * directions.length)];
            const r = Math.floor(Math.random() * gridSize);
            const c = Math.floor(Math.random() * gridSize);
            
            if (canPlace(r, c, dir.dr, dir.dc, w.word)) {
                place(r, c, dir.dr, dir.dc, w.word);
                placedWords.push(w); // Track successful placement
                placed = true;
            }
            attempts++;
        }
        
        // Log warning if word couldn't be placed
        if (!placed) {
            console.warn(`Could not place word: ${w.word} (${w.word.length} letters) in ${gridSize}x${gridSize} grid`);
        }
    }

    // 3. Fill random
    const letters = language === 'he' 
        ? "אבגדהוזחטיכלמנסעפצקרשת" 
        : "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    for (let r = 0; r < gridSize; r++) {
        for (let c = 0; c < gridSize; c++) {
            if (newGrid[r][c] === '') {
                newGrid[r][c] = letters[Math.floor(Math.random() * letters.length)];
            }
        }
    }

    setGrid(newGrid);
    setFoundWords([]);
    setFoundCells(new Set());
    setSelectionStart(null);
    setCurrentSelection([]);
    
    // Return placed words so we can update the word list
    return placedWords;
  };

  const handleRestart = () => {
    if (onRestart) {
        onRestart();
    } else {
        generateGrid();
    }
  };

  // Selection Logic
  const getLine = (start: {r: number, c: number}, end: {r: number, c: number}) => {
      const dr = end.r - start.r;
      const dc = end.c - start.c;
      
      // Check if it's a valid line (horizontal, vertical, or perfectly diagonal)
      if (dr === 0 && dc === 0) return [`${start.r},${start.c}`]; // Single cell

      // Must be straight line
      // Horizontal: dr=0
      // Vertical: dc=0
      // Diagonal: |dr| == |dc|
      
      if (dr !== 0 && dc !== 0 && Math.abs(dr) !== Math.abs(dc)) return null;

      const stepR = dr === 0 ? 0 : dr / Math.abs(dr);
      const stepC = dc === 0 ? 0 : dc / Math.abs(dc);
      
      const length = Math.max(Math.abs(dr), Math.abs(dc));
      const cells: string[] = [];
      
      for (let i = 0; i <= length; i++) {
          cells.push(`${start.r + i * stepR},${start.c + i * stepC}`);
      }
      return cells;
  };

  const onSelectionStart = (r: number, c: number) => {
      setSelectionStart({ r, c });
      setCurrentSelection([`${r},${c}`]);
  };

  const onSelectionMove = (r: number, c: number) => {
      if (!selectionStart) return;
      const line = getLine(selectionStart, { r, c });
      if (line) {
          setCurrentSelection(line);
      }
  };

  const onSelectionEnd = () => {
      if (!selectionStart || currentSelection.length === 0) {
          setSelectionStart(null);
          setCurrentSelection([]);
          return;
      }

      // Construct the word from selection
      const word = currentSelection.map(cell => {
          const [r, c] = cell.split(',').map(Number);
          return grid[r][c];
      }).join('');
      
      // Also check reverse word for forgiving selection
      const reverseWord = word.split('').reverse().join('');

      let matched = activeWords.find(w => w.word === word || w.word === reverseWord);
      
      if (matched && !foundWords.includes(matched.word)) {
          // Found a word!
          const newFoundWords = [...foundWords, matched.word];
          setFoundWords(newFoundWords);
          
          const newFoundCells = new Set(foundCells);
          currentSelection.forEach(cell => newFoundCells.add(cell));
          setFoundCells(newFoundCells);
          
          if (newFoundWords.length === activeWords.length) {
              triggerConfetti();
          }
      }

      setSelectionStart(null);
      setCurrentSelection([]);
  };

  const isGameOver = foundWords.length === activeWords.length;

  return (
    <GameContainer>
       <WordList>
         {activeWords.map(w => (
             <WordItem key={w.word} $found={foundWords.includes(w.word)}>
                 {w.emoji} {w.word}
             </WordItem>
         ))}
       </WordList>

      <WordSearchBoard
        grid={grid}
        foundCells={foundCells}
        currentSelection={currentSelection}
        onSelectionStart={onSelectionStart}
        onSelectionMove={onSelectionMove}
        onSelectionEnd={onSelectionEnd}
      />

      <AnimatePresence>
        {isGameOver && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            <RestartButton onClick={handleRestart}>
              {t('game.playAgain')}
            </RestartButton>
          </motion.div>
        )}
      </AnimatePresence>
    </GameContainer>
  );
}
