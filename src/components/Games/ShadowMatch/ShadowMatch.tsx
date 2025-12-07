import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { triggerConfetti } from '../../../utils/confetti';
import { ENGLISH_LETTERS, EnglishLetter } from '../../../data/englishData';
import {
  GameContainer,
  Title,
  MainItemContainer,
  ShadowsGrid,
  ShadowCard,
  NextButton
} from './ShadowMatchStyled';

// Filter suitable items (animals usually have distinctive silhouettes)
const ITEMS = ENGLISH_LETTERS.filter(l => 
  ['Animal', 'Transport', 'Food'].includes(l.category || '')
);

export default function ShadowMatch() {
  const { t } = useTranslation();
  const [targetItem, setTargetItem] = useState<EnglishLetter | null>(null);
  const [options, setOptions] = useState<EnglishLetter[]>([]);
  const [status, setStatus] = useState<'playing' | 'correct' | 'wrong'>('playing');
  const [wrongSelection, setWrongSelection] = useState<string | null>(null);

  const generateLevel = () => {
    // 1. Pick target
    const target = ITEMS[Math.floor(Math.random() * ITEMS.length)];
    
    // 2. Pick 2 distractors (different from target)
    const distractors: EnglishLetter[] = [];
    while (distractors.length < 2) {
      const item = ITEMS[Math.floor(Math.random() * ITEMS.length)];
      if (item.word !== target.word && !distractors.find(d => d.word === item.word)) {
        distractors.push(item);
      }
    }

    // 3. Shuffle options
    const allOptions = [target, ...distractors].sort(() => Math.random() - 0.5);

    setTargetItem(target);
    setOptions(allOptions);
    setStatus('playing');
    setWrongSelection(null);
  };

  useEffect(() => {
    generateLevel();
  }, []);

  const handleOptionClick = (item: EnglishLetter) => {
    if (status === 'correct') return;

    if (item.word === targetItem?.word) {
      setStatus('correct');
      triggerConfetti();
    } else {
      setStatus('wrong');
      setWrongSelection(item.word);
      // Optional: Auto reset wrong status to let them try again?
      setTimeout(() => {
          setStatus('playing');
          setWrongSelection(null);
      }, 1000);
    }
  };

  if (!targetItem) return null;

  return (
    <GameContainer>
      <Title>{t('logic.games.shadowMatch.title')}</Title>

      <MainItemContainer
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring" }}
      >
        {targetItem.emoji}
      </MainItemContainer>

      <ShadowsGrid>
        {options.map((item, idx) => {
           const isTarget = item.word === targetItem.word;
           const isRevealed = status === 'correct' && isTarget;
           const isWrong = wrongSelection === item.word;

           return (
             <ShadowCard
               key={`${item.word}-${idx}`}
               onClick={() => handleOptionClick(item)}
               $revealed={isRevealed}
               $isCorrect={status === 'correct' && isTarget}
               $isWrong={isWrong}
               whileHover={{ scale: 1.1 }}
               whileTap={{ scale: 0.9 }}
             >
               {item.emoji}
             </ShadowCard>
           );
        })}
      </ShadowsGrid>

      {status === 'correct' && (
        <NextButton 
            onClick={generateLevel}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
        >
          {t('game.playAgain')} ➡️
        </NextButton>
      )}
    </GameContainer>
  );
}
