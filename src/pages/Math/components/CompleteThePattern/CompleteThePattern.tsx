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

const ITEMS = [
  '🔴', '🔵', '🟢', '🟡', '🟣', '🟠', // Shapes/Colors
  '🍎', '🍌', '🍒', '🍇', '🍉', '🍋', // Fruits
  '🐶', '🐱', '🐭', '🐹', '🐰', '🦊' // Animals
];

export default function CompleteThePattern() {
  const { t } = useTranslation();
  const [pattern, setPattern] = useState<string[]>([]);
  const [missingItem, setMissingItem] = useState('');
  const [options, setOptions] = useState<string[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const generateLevel = () => {
    // Select random items
    let pool = [...ITEMS].sort(() => Math.random() - 0.5);
    const A = pool[0];
    const B = pool[1];
    const C = pool[2];
    
    // Pattern types
    // 0: ABABAB (Simple Alternating)
    // 1: ABCABC (Triple Loop)
    // 2: AAB AAB (Doubled First)
    // 3: ABB ABB (Doubled Second)
    // 4: AABBCC (Doubled Pairs) - Harder
    // 5: ABAC (Alternating Pivot) - Harder
    
    // Weighted selection: make hard harder patterns more frequent or equal
    const types = ['ABABAB', 'ABCABC', 'AABAAB', 'ABBABB', 'AABBCC', 'ABACAB'];
    const type = types[Math.floor(Math.random() * types.length)];
    
    let sequence: string[] = [];
    let answer = ''; // The item that comes NEXT

    switch (type) {
      case 'ABABAB':
        sequence = [A, B, A, B, A]; 
        answer = B;
        break;
      case 'ABCABC':
        sequence = [A, B, C, A, B]; 
        answer = C;
        break;
      case 'AABAAB':
        sequence = [A, A, B, A, A]; 
        answer = B;
        break;
      case 'ABBABB':
        sequence = [A, B, B, A, B]; 
        answer = B;
        break;
      case 'AABBCC':
        sequence = [A, A, B, B, C]; 
        answer = C; // A, A, B, B, C, [C]
        break;
      case 'ABACAB':
        sequence = [A, B, A, C, A];
        answer = B; // A, B, A, C, A, [B]...
        break;
      default:
        sequence = [A, B, A, B, A];
        answer = B;
    }

    // Options: Answer + 2 distractors
    // Try to pick distractors from the current active set (A, B, C) to make it harder
    // If not enough unique active items, pull from pool
    const activeItems = Array.from(new Set([A, B, C].filter(Boolean)));
    const uniqueDistractors = activeItems.filter(i => i !== answer);
    
    // Fill remaining distractors from pool if needed
    while (uniqueDistractors.length < 2) {
      const randomItem = pool.find(i => i !== answer && !uniqueDistractors.includes(i));
      if (randomItem) uniqueDistractors.push(randomItem);
    }

    const distractors = uniqueDistractors.slice(0, 2);
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
