import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { AnimatePresence } from 'framer-motion';
import { triggerConfetti } from '../../../../utils/confetti';
import { HEBREW_LETTERS, HebrewLetter } from '../../../../data/hebrewData';
import {
  QuizContainer,
  QuestionCard,
  QuestionEmoji,
  QuestionText,
  OptionsGrid,
  OptionButton,
  SpeakerButton,
} from './FirstLetterQuizStyled';

export default function FirstLetterQuiz() {
  const { t } = useTranslation();
  const [target, setTarget] = useState<HebrewLetter | null>(null);
  const [options, setOptions] = useState<HebrewLetter[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const generateQuestion = () => {
    const randomTarget = HEBREW_LETTERS[Math.floor(Math.random() * HEBREW_LETTERS.length)];
    setTarget(randomTarget);
    setSelected(null);
    setIsCorrect(null);

    // Generate distractors
    // Generate distractors (ensure unique characters)
    const uniqueChars = Array.from(new Set(HEBREW_LETTERS.map(l => l.char)))
      .filter(char => char !== randomTarget.char);
    
    const selectedChars = uniqueChars
      .sort(() => 0.5 - Math.random())
      .slice(0, 2);

    const distractors = selectedChars.map(char => 
      HEBREW_LETTERS.find(l => l.char === char)!
    );
    
    const allOptions = [randomTarget, ...distractors].sort(() => 0.5 - Math.random());
    setOptions(allOptions);
  };

  useEffect(() => {
    generateQuestion();
  }, []);

  const handleSelect = (char: string) => {
    if (!target) return;
    setSelected(char);
    const correct = char === target.char;
    setIsCorrect(correct);

    if (correct) {
      triggerConfetti();
      setTimeout(generateQuestion, 1000);
    }
  };

  const speakWord = () => {
    if (!target) return;
    const utterance = new SpeechSynthesisUtterance(target.word);
    utterance.lang = 'he-IL';
    utterance.rate = 0.75;
    window.speechSynthesis.speak(utterance);
  };

  if (!target) return null;

  return (
    <QuizContainer>
      <AnimatePresence mode="wait">
        <QuestionCard
          key={target.char}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <QuestionEmoji>{target.emoji}</QuestionEmoji>
          <QuestionText>{t('hebrew.games.quiz.question')}</QuestionText>
          <SpeakerButton
            onClick={speakWord}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            title="Hear word"
          >
            🔊
          </SpeakerButton>
        </QuestionCard>
      </AnimatePresence>

      <OptionsGrid>
        {options.map((option) => (
          <OptionButton
            key={option.char}
            onClick={() => handleSelect(option.char)}
            $isCorrect={selected === option.char && isCorrect === true}
            $isWrong={selected === option.char && isCorrect === false}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={isCorrect === true}
          >
            {option.char}
          </OptionButton>
        ))}
      </OptionsGrid>
    </QuizContainer>
  );
}
