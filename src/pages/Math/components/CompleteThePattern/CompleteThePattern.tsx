import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { AnimatePresence } from 'framer-motion';
import { triggerConfetti } from '../../../../utils/confetti';
import {
  GameContainer,
  QuestionText,
  PatternArea,
  PatternItem,
  OptionsGrid,
  OptionButton,
} from './CompleteThePatternStyled';

const ITEMS = ['🍎', '🍌', '🍒', '🍇', '🍉', '🍋', '🍐', '🍊'];

export default function CompleteThePattern() {
  const { t } = useTranslation();
  const [pattern, setPattern] = useState<string[]>([]);
  const [missingItem, setMissingItem] = useState('');
  const [options, setOptions] = useState<string[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const generateLevel = () => {
    // Select 2 random items for A and B
    let pool = [...ITEMS].sort(() => Math.random() - 0.5);
    const A = pool[0];
    const B = pool[1];
    
    // Pattern types: ABABAB, AABBAABB, ABCABC (need 3 items)
    const type = Math.random();
    let sequence: string[] = [];
    
    if (type < 0.4) {
      // ABABAB
      sequence = [A, B, A, B, A]; // Next is B
    } else if (type < 0.7) {
      // AABBAA
      sequence = [A, A, B, B, A]; // Next is A
    } else {
      // ABCABC
      const C = pool[2];
      sequence = [A, B, C, A, B]; // Next is C
    }

    // Determine the answer based on the sequence continuation
    let answer = '';
    if (type < 0.4) answer = B;
    else if (type < 0.7) answer = A;
    else answer = pool[2]; // C

    // Options: Answer + 2 distractors
    const distractors = pool.filter(i => i !== answer).slice(0, 2);
    const allOptions = [answer, ...distractors].sort(() => Math.random() - 0.5);

    setPattern(sequence);
    setMissingItem(answer);
    setOptions(allOptions);
    setSelected(null);
    setIsCorrect(null);
  };

  useEffect(() => {
    generateLevel();
  }, []);

  const handleSelect = (item: string) => {
    if (isCorrect === true) return;
    
    setSelected(item);
    const correct = item === missingItem;
    setIsCorrect(correct);

    if (correct) {
      triggerConfetti();
      setTimeout(generateLevel, 1500);
    }
  };

  return (
    <GameContainer>
      <QuestionText>{t('math.games.patternQuestion')}</QuestionText>
      
      <PatternArea>
        <AnimatePresence mode="popLayout">
          {pattern.map((item, index) => (
            <PatternItem
              key={index + item} // Unique key for animation
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              {item}
            </PatternItem>
          ))}
          <PatternItem $isPlaceholder>
             {isCorrect ? missingItem : '?'}
          </PatternItem>
        </AnimatePresence>
      </PatternArea>

      <OptionsGrid>
        {options.map((item, index) => (
          <OptionButton
            key={index}
            onClick={() => handleSelect(item)}
            $isCorrect={selected === item && isCorrect === true}
            $isWrong={selected === item && isCorrect === false}
            disabled={isCorrect === true}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {item}
          </OptionButton>
        ))}
      </OptionsGrid>
    </GameContainer>
  );
}
