import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { AnimatePresence } from 'framer-motion';
import { ENGLISH_LETTERS, EnglishLetter } from '../../../../data/englishData';
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
  const [currentLetter, setCurrentLetter] = useState<EnglishLetter | null>(null);

  const getRandomLetter = () => {
    const randomIndex = Math.floor(Math.random() * ENGLISH_LETTERS.length);
    setCurrentLetter(ENGLISH_LETTERS[randomIndex]);
  };

  useEffect(() => {
    getRandomLetter();
  }, []);

  const speakLetter = () => {
    if (!currentLetter) return;
    const utterance = new SpeechSynthesisUtterance(currentLetter.char);
    utterance.lang = 'en-US';
    utterance.rate = 0.75;
    window.speechSynthesis.speak(utterance);
  };

  return (
    <GameContainer>
      <AnimatePresence mode="wait">
        {currentLetter && (
          <Flashcard
            key={currentLetter.char + currentLetter.word} // Unique key just in case
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
          {t('english.games.flashcards.listen')}
        </Button>
        <Button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={getRandomLetter}
        >
          {t('english.games.flashcards.randomize')}
        </Button>
      </Controls>
    </GameContainer>
  );
}
