import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { AnimatePresence } from 'framer-motion';
import { triggerConfetti } from '../../../utils/confetti';
import {
  GameWrapper,
  Title,
  ImageContainer,
  DropZoneContainer,
  DropSlot,
  LettersBank,
  DraggableLetter,
} from './SpellingGameStyled';

interface WordData {
  word: string;
  emoji: string;
}

interface LetterObj {
  id: string;
  char: string;
}

interface SpellingGameProps {
  words: WordData[];
  titleKey: string;
  direction?: 'ltr' | 'rtl';
  alphabet?: string;
  language?: string;
}

export default function SpellingGame({ words, titleKey, direction = 'ltr', alphabet, language = 'en-US' }: SpellingGameProps) {
  const { t } = useTranslation();
  const [currentWord, setCurrentWord] = useState<WordData | null>(null);
  const [scrambledLetters, setScrambledLetters] = useState<LetterObj[]>([]);
  const [placedLetters, setPlacedLetters] = useState<(string | null)[]>([]);
  const [hints, setHints] = useState<Set<number>>(new Set());
  const [isCorrect, setIsCorrect] = useState(false);

  const speakWord = (word: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(word);
      utterance.lang = language;
      utterance.rate = 0.8;
      window.speechSynthesis.speak(utterance);
    }
  };

  const generateLevel = () => {
    const target = words[Math.floor(Math.random() * words.length)];
    const letters = target.word.split('');
    
    // Determine number of hints
    let hintsCount = 0;
    if (letters.length > 5) hintsCount = 2;
    // Note: The prompt says "if word has more than 2 letters display one letter".
    else if (letters.length > 2) hintsCount = 1;

    // Select random indices for hints
    const hintIndices = new Set<number>();
    while (hintIndices.size < hintsCount) {
      const idx = Math.floor(Math.random() * letters.length);
      hintIndices.add(idx);
    }

    const newPlaced = new Array(letters.length).fill(null);
    const lettersForScramble: LetterObj[] = [];

    letters.forEach((char, i) => {
      if (hintIndices.has(i)) {
        newPlaced[i] = char;
      } else {
        lettersForScramble.push({
          id: `${char}-${Math.random().toString(36).substr(2, 9)}`,
          char
        });
      }
    });

    // Add distractor letters (3-5 random letters not in the word)
    if (alphabet) {
      const numDistractors = Math.floor(Math.random() * 3) + 3; // 3-5 distractors
      const wordCharsSet = new Set(letters);
      const availableChars = alphabet.split('').filter(c => !wordCharsSet.has(c));
      
      for (let i = 0; i < numDistractors && availableChars.length > 0; i++) {
        const randomIndex = Math.floor(Math.random() * availableChars.length);
        const distractorChar = availableChars.splice(randomIndex, 1)[0];
        lettersForScramble.push({
          id: `${distractorChar}-${Math.random().toString(36).substr(2, 9)}`,
          char: distractorChar
        });
      }
    }
    
    // Shuffle remaining letters
    const shuffled = lettersForScramble.sort(() => Math.random() - 0.5);
    
    setCurrentWord(target);
    setScrambledLetters(shuffled);
    setPlacedLetters(newPlaced);
    setHints(hintIndices);
    setIsCorrect(false);

    // Pronounce the word using text-to-speech
    speakWord(target.word);
  };

  useEffect(() => {
    generateLevel();
  }, [words]); // Re-run if words list changes (e.g. language switch)

  const handleLetterClick = (letterObj: LetterObj, index: number) => {
    if (isCorrect) return;

    // Find first empty slot
    const emptyIndex = placedLetters.findIndex(l => l === null);
    if (emptyIndex === -1) return;

    const newPlaced = [...placedLetters];
    newPlaced[emptyIndex] = letterObj.char;
    setPlacedLetters(newPlaced);

    const newScrambled = [...scrambledLetters];
    newScrambled.splice(index, 1);
    setScrambledLetters(newScrambled);

    checkWin(newPlaced, currentWord!.word);
  };

  const handleSlotClick = (index: number) => {
    if (isCorrect || !placedLetters[index]) return;

    const char = placedLetters[index]!;
    const newPlaced = [...placedLetters];
    newPlaced[index] = null;
    setPlacedLetters(newPlaced);

    // Create a new ID for the returned letter to ensure it enters as a "new" item
    // or we could track original IDs but that's complex for placed letters which are just chars.
    // Making a new ID is fine, it will animate in.
    const newLetterObj: LetterObj = {
      id: `${char}-${Math.random().toString(36).substr(2, 9)}`,
      char
    };

    setScrambledLetters([...scrambledLetters, newLetterObj]);
  };

  const checkWin = (currentPlaced: (string | null)[], target: string) => {
    const formedWord = currentPlaced.join('');
    if (formedWord === target) {
      setIsCorrect(true);
      triggerConfetti();
      setTimeout(generateLevel, 1500);
    }
  };

  if (!currentWord) return null;

  return (
    <GameWrapper>
      <Title>{t(titleKey)}</Title>
      
      <ImageContainer onClick={() => currentWord && speakWord(currentWord.word)} style={{ cursor: 'pointer', position: 'relative' }}>
        {currentWord.emoji}
        <span style={{ position: 'absolute', bottom: '5px', right: '5px', fontSize: '24px' }}>🔊</span>
      </ImageContainer>

      <DropZoneContainer $direction={direction}>
        {placedLetters.map((letter, i) => (
          <DropSlot 
            key={i} 
            $isFilled={!!letter} 
            $isCorrect={isCorrect}
            style={{ opacity: hints.has(i) ? 0.7 : 1, fontWeight: hints.has(i) ? 'bold' : 'normal' }}
            onClick={() => !hints.has(i) && handleSlotClick(i)}
          >
            {letter}
          </DropSlot>
        ))}
      </DropZoneContainer>

      <LettersBank>
        <AnimatePresence mode="popLayout"> 
          {scrambledLetters.map((letterObj, i) => (
            <DraggableLetter
              layout 
              key={letterObj.id} 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleLetterClick(letterObj, i)}
            >
              {letterObj.char}
            </DraggableLetter>
          ))}
        </AnimatePresence>
      </LettersBank>
    </GameWrapper>
  );
}
