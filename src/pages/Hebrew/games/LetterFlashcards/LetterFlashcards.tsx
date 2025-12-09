import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { AnimatePresence } from 'framer-motion';
import { HEBREW_LETTERS, HebrewLetter } from '../../../../data/hebrewData';
import { speak } from '../../../../utils/speech';
import {
  GameContainer,
  Flashcard,
  Letter,
  Word,
  Controls,
  Button,
} from './LetterFlashcardsStyled';

export default function LetterFlashcards() {
  const { t } = useTranslation();
  const [currentLetter, setCurrentLetter] = useState<HebrewLetter | null>(null);

  const getRandomLetter = () => {
    const randomIndex = Math.floor(Math.random() * HEBREW_LETTERS.length);
    setCurrentLetter(HEBREW_LETTERS[randomIndex]);
  };

  useEffect(() => {
    getRandomLetter();
  }, []);

  const speakLetter = () => {
    if (!currentLetter) return;
    speak(currentLetter.char, 'he-IL');
  };

  return (
    <GameContainer>
      <AnimatePresence mode="wait">
        {currentLetter && (
          <Flashcard
            key={currentLetter.char}
            initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            exit={{ scale: 0.8, opacity: 0, rotate: 10 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <Letter>{currentLetter.char}</Letter>
            <Word>{currentLetter.word}</Word>
            <div style={{ fontSize: '3rem' }}>{currentLetter.emoji}</div>
          </Flashcard>
        )}
      </AnimatePresence>

      <Controls>
        <Button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={speakLetter}
        >
          {t('hebrew.games.flashcards.listen')}
        </Button>
        <Button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={getRandomLetter}
        >
          {t('hebrew.games.flashcards.randomize')}
        </Button>
      </Controls>
    </GameContainer>
  );
}
