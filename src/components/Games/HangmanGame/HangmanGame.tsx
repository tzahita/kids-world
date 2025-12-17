import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { triggerConfetti } from '../../../utils/confetti';
import {
  GameWrapper,
  Title,
  FlowerContainer,
  FlowerPart,
  WordDisplay,
  LetterSlot,
  KeyboardGrid,
  KeyButton,
} from './HangmanGameStyled';

interface WordData {
  word: string;
  emoji: string;
  category?: string;
}

interface HangmanGameProps {
  words: WordData[];
  alphabet: string[];
  titleKey: string;
  direction?: 'ltr' | 'rtl';
}

export default function HangmanGame({ words, alphabet, titleKey, direction = 'ltr' }: HangmanGameProps) {
  const MAX_MISTAKES = 6;
  const { t } = useTranslation();
  const [targetWord, setTargetWord] = useState<WordData | null>(null);
  const [guessedLetters, setGuessedLetters] = useState<Set<string>>(new Set());
  const [mistakes, setMistakes] = useState(0);
  const [gameStatus, setGameStatus] = useState<'playing' | 'won' | 'lost'>('playing');

  // Helper function to normalize Hebrew final letters to regular letters
  const normalizeFinalLetters = (word: string): string => {
    return word
      .replace(/ץ/g, 'צ')  // Final Tsadi to regular Tsadi
      .replace(/ף/g, 'פ')  // Final Pey to regular Pey
      .replace(/ן/g, 'נ')  // Final Nun to regular Nun
      .replace(/ם/g, 'מ')  // Final Mem to regular Mem
      .replace(/ך/g, 'כ'); // Final Kaf to regular Kaf
  };

  const generateLevel = () => {
    const target = words[Math.floor(Math.random() * words.length)];
    // Normalize the word to convert final letters to regular letters
    const normalizedWord = normalizeFinalLetters(target.word);
    const letters = normalizedWord.split('');
    const uniqueLetters = Array.from(new Set(letters)); // Get unique letters for hints

    // Determine number of hints
    let hintsCount = 0;
    if (letters.length > 5) hintsCount = 2;
    // Note: The prompt says "if word has more than 2 letters display one letter".
    // For Hangman, 2 letters is very short, but consistent logic is best.
    else if (letters.length > 2) hintsCount = 1;

    // Select random unique letters for hints
    const initialGuesses = new Set<string>();
    while (initialGuesses.size < hintsCount && initialGuesses.size < uniqueLetters.length) {
      const char = uniqueLetters[Math.floor(Math.random() * uniqueLetters.length)];
      initialGuesses.add(char);
    }

    setTargetWord({ ...target, word: normalizedWord });
    setGuessedLetters(initialGuesses); // Pre-fill with hints
    setMistakes(0);
    setGameStatus('playing');
  };

  useEffect(() => {
    generateLevel();
  }, [words]);

  useEffect(() => {
    if (!targetWord) return;
    
    // Check win/loss
    const letters = targetWord.word.split('');
    const isWon = letters.every(l => guessedLetters.has(l));
    
    if (isWon && gameStatus !== 'won') {
      setGameStatus('won');
      triggerConfetti();
      setTimeout(generateLevel, 2000);
    }

    if (mistakes >= MAX_MISTAKES && gameStatus !== 'lost') {
      setGameStatus('lost');
      setTimeout(generateLevel, 2000);
    }
  }, [guessedLetters, mistakes, targetWord, gameStatus]);

  const handleGuess = (char: string) => {
    if (gameStatus !== 'playing' || guessedLetters.has(char)) return;

    setGuessedLetters(prev => new Set(prev).add(char));

    if (!targetWord?.word.includes(char)) {
      setMistakes(prev => prev + 1);
    }
  };

  if (!targetWord) return null;

  return (
    <GameWrapper>
      <Title>{t(titleKey)}</Title>
      
      {targetWord.category && (
        <h3 style={{ margin: 0, color: '#666', opacity: 0.8 }}>
          {t('common.category')}: {targetWord.category}
        </h3>
      )}
      
      <FlowerContainer>
        {/* Simple visual representation of mistakes: Petals falling/remaining?
            Let's do: Start with Seed. Mistakes grow it into a weird weed?
            Or: "Don't let the balloon pop!" 🎈
            Let's stick to "Flower": Start with 6 petals. Remove one for each mistake.
         */}
         <FlowerPart>
           {mistakes === 0 && '🌻'}
           {mistakes === 1 && '🌺'}
           {mistakes === 2 && '🌹'}
           {mistakes === 3 && '🌷'}
           {mistakes === 4 && '🥀'}
           {mistakes === 5 && '🍂'}
           {mistakes === 6 && '💨'}
         </FlowerPart>
      </FlowerContainer>

      {gameStatus === 'lost' && <h3 style={{color: 'red'}}>{targetWord.word}</h3>}

      <WordDisplay $direction={direction}>
        {targetWord.word.split('').map((char, i) => (
          <LetterSlot key={i}>
            {guessedLetters.has(char) || gameStatus === 'lost' ? char : ''}
          </LetterSlot>
        ))}
      </WordDisplay>

      <KeyboardGrid>
        {alphabet.map((char) => {
          const isGuessed = guessedLetters.has(char);
          const isCorrect = targetWord.word.includes(char);
          
          let status: 'unused' | 'correct' | 'wrong' = 'unused';
          if (isGuessed) {
            status = isCorrect ? 'correct' : 'wrong';
          }

          return (
            <KeyButton
              key={char}
              $status={status}
              onClick={() => handleGuess(char)}
              whileTap={{ scale: 0.9 }}
            >
              {char}
            </KeyButton>
          );
        })}
      </KeyboardGrid>
      

    </GameWrapper>
  );
}
