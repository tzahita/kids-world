import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { AnimatePresence } from 'framer-motion';
import { triggerConfetti } from '../../../../utils/confetti';
import { theme } from '../../../../styles/theme';
import {
  GameContainer,
  Question,
  CardsContainer,
  NumberCard,
  CardEmoji,
} from './BiggerOrSmallerStyled';

const EMOJIS = ['🐘', '🐁', '🐒', '🦒', '🐈', '🐕', '🐂', '🐋'];

export default function BiggerOrSmaller() {
  const { t } = useTranslation();
  const [leftNumber, setLeftNumber] = useState(0);
  const [rightNumber, setRightNumber] = useState(0);
  const [isAskingBigger, setIsAskingBigger] = useState(true);
  
  const [selected, setSelected] = useState<'left' | 'right' | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const generateLevel = () => {
    const n1 = Math.floor(Math.random() * 20) + 1;
    let n2 = Math.floor(Math.random() * 20) + 1;
    
    // Ensure numbers are different
    while (n1 === n2) {
      n2 = Math.floor(Math.random() * 20) + 1;
    }
    
    // Randomize question type (Bigger or Smaller?)
    setIsAskingBigger(Math.random() > 0.5);

    setLeftNumber(n1);
    setRightNumber(n2);
    setSelected(null);
    setIsCorrect(null);
  };

  useEffect(() => {
    generateLevel();
  }, []);

  const handleSelect = (side: 'left' | 'right') => {
    if (isCorrect === true) return;
    
    setSelected(side);
    
    const chosenVal = side === 'left' ? leftNumber : rightNumber;
    const otherVal = side === 'left' ? rightNumber : leftNumber;
    
    let correct = false;
    if (isAskingBigger) {
      correct = chosenVal > otherVal;
    } else {
      correct = chosenVal < otherVal;
    }

    setIsCorrect(correct);

    if (correct) {
      triggerConfetti();
      setTimeout(generateLevel, 1500);
    }
  };

  return (
    <GameContainer>
      <AnimatePresence mode="wait">
        <Question
          key={isAskingBigger ? 'bigger' : 'smaller'}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
        >
          {isAskingBigger ? t('math.games.whichBigger') : t('math.games.whichSmaller')}
        </Question>
      </AnimatePresence>

      <CardsContainer>
        <NumberCard
          $color={theme.colors.secondary}
          onClick={() => handleSelect('left')}
          $isCorrect={selected === 'left' && isCorrect === true}
          $isWrong={selected === 'left' && isCorrect === false}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          animate={isCorrect === true ? { scale: [1, 1.1, 1] } : {}}
        >
          <CardEmoji>{EMOJIS[leftNumber % EMOJIS.length]}</CardEmoji>
          {leftNumber}
        </NumberCard>

        <div style={{ fontSize: '3rem', alignSelf: 'center' }}>⚡</div>

        <NumberCard
          $color={theme.colors.accent}
          onClick={() => handleSelect('right')}
          $isCorrect={selected === 'right' && isCorrect === true}
          $isWrong={selected === 'right' && isCorrect === false}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          animate={isCorrect === true ? { scale: [1, 1.1, 1] } : {}}
        >
          <CardEmoji>{EMOJIS[rightNumber % EMOJIS.length]}</CardEmoji>
          {rightNumber}
        </NumberCard>
      </CardsContainer>
    </GameContainer>
  );
}
