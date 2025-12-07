import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { AnimatePresence } from 'framer-motion';
import { triggerConfetti } from '../../../../utils/confetti';
import {
  GameContainer,
  CrittersArea,
  Critter,
  QuestionText,
  OptionsGrid,
  OptionButton,
} from './CountTheCrittersStyled';

const CRITTERS = ['🐸', '🐞', '🦋', '🐟', '🐢', '🦀', '🐌', '🐝'];

export default function CountTheCritters() {
  const { t } = useTranslation();
  const [targetNumber, setTargetNumber] = useState(0);
  const [currentCritter, setCurrentCritter] = useState('');
  const [options, setOptions] = useState<number[]>([]);
  const [selected, setSelected] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const generateLevel = () => {
    const num = Math.floor(Math.random() * 10) + 1;
    const critter = CRITTERS[Math.floor(Math.random() * CRITTERS.length)];
    
    // Generate distractors
    const distractors = new Set<number>();
    while (distractors.size < 2) {
      const d = Math.floor(Math.random() * 10) + 1;
      if (d !== num) distractors.add(d);
    }
    
    const allOptions = [num, ...Array.from(distractors)].sort(() => Math.random() - 0.5);
    
    setTargetNumber(num);
    setCurrentCritter(critter);
    setOptions(allOptions);
    setSelected(null);
    setIsCorrect(null);
  };

  useEffect(() => {
    generateLevel();
  }, []);

  const handleSelect = (num: number) => {
    if (isCorrect === true) return;
    
    setSelected(num);
    const correct = num === targetNumber;
    setIsCorrect(correct);

    if (correct) {
      triggerConfetti();
      setTimeout(generateLevel, 1500);
    }
  };

  return (
    <GameContainer>
      <QuestionText>{t('math.games.countQuestion')}</QuestionText>
      
      <CrittersArea>
        <AnimatePresence mode="popLayout">
          {Array.from({ length: targetNumber }).map((_, i) => (
            <Critter
              key={i}
              initial={{ scale: 0, rotate: -20 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0 }}
              transition={{ delay: i * 0.1, type: 'spring' }}
              whileHover={{ scale: 1.2, rotate: 10 }}
            >
              {currentCritter}
            </Critter>
          ))}
        </AnimatePresence>
      </CrittersArea>

      <OptionsGrid>
        {options.map((num) => (
          <OptionButton
            key={num}
            onClick={() => handleSelect(num)}
            $isCorrect={selected === num && isCorrect === true}
            $isWrong={selected === num && isCorrect === false}
            disabled={isCorrect === true}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {num}
          </OptionButton>
        ))}
      </OptionsGrid>
    </GameContainer>
  );
}
