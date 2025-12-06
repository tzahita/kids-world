import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { triggerConfetti } from '../../utils/confetti';
import {
  BoardContainer,
  StatsBar,
  GameGrid,
  Card,
  CardBack,
  RestartButton,
} from './MemoryBoardStyled';

interface MemoryCard {
  id: string;
  icon: string;
  isFlipped: boolean;
  isMatched: boolean;
}

interface MemoryBoardProps {
  items: string[];
}

export default function MemoryBoard({ items }: MemoryBoardProps) {
  const { difficulty } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [cards, setCards] = useState<MemoryCard[]>([]);
  const [flipped, setFlipped] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [matchedCount, setMatchedCount] = useState(0);

  const gridSize = difficulty === 'hard' ? 8 : difficulty === 'medium' ? 6 : 4;
  const pairCount = (gridSize * gridSize) / 2;

  useEffect(() => {
    if (!items || items.length === 0) return;

    // Shuffle logic
    // Ensure we have enough items, if not recycle
    let pool = items;
    if (items.length < pairCount) {
        // Not enough items? repeat
        while (pool.length < pairCount) {
            pool = [...pool, ...items];
        }
    }
    
    const selectedItems = pool.slice(0, pairCount);
    
    // Create pairs
    const deck = [...selectedItems, ...selectedItems]
      .sort(() => Math.random() - 0.5)
      .map((icon, index) => ({
        id: `card-${index}`,
        icon,
        isFlipped: false,
        isMatched: false,
      }));

    setCards(deck);
    setFlipped([]);
    setMoves(0);
    setMatchedCount(0);
  }, [difficulty, pairCount, items]);

  const handleCardClick = (index: number) => {
    // Block if already flipped 2, or card is matched/flipped
    if (flipped.length >= 2 || cards[index].isFlipped || cards[index].isMatched) return;

    const newCards = [...cards];
    newCards[index].isFlipped = true;
    setCards(newCards);
    setFlipped([...flipped, index]);

    if (flipped.length === 1) {
      setMoves((p) => p + 1);
      const firstIndex = flipped[0];
      if (newCards[firstIndex].icon === newCards[index].icon) {
        // Match!
        newCards[firstIndex].isMatched = true;
        newCards[index].isMatched = true;
        setCards(newCards);
        setFlipped([]);
        setMatchedCount((p) => {
          const newCount = p + 1;
          if (newCount === pairCount) triggerConfetti();
          return newCount;
        });
      } else {
        // No match, flip back after delay
        setTimeout(() => {
          setCards((prev) => {
            const resetCards = [...prev];
            resetCards[firstIndex].isFlipped = false;
            resetCards[index].isFlipped = false;
            return resetCards;
          });
          setFlipped([]);
        }, 1000);
      }
    }
  };

  const isWon = matchedCount === pairCount;

  return (
    <BoardContainer>
      {!isWon && (
        <StatsBar>
          <span>{t('memory.moves')}: {moves}</span>
          <span>{t('memory.left')}: {pairCount - matchedCount}</span>
        </StatsBar>
      )}
      
      {isWon && (
        <RestartButton
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => navigate('..')}
        >
          {t('memory.playAgain')} 🔄
        </RestartButton>
      )}

      <GameGrid $size={gridSize}>
        {cards.map((card, index) => (
          <Card
            key={card.id}
            $flipped={card.isFlipped}
            $matched={card.isMatched}
            onClick={() => handleCardClick(index)}
            animate={{ rotateY: card.isFlipped || card.isMatched ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <div style={{ transform: 'rotateY(180deg)' }}>
              {(card.isFlipped || card.isMatched) ? card.icon : <CardBack>?</CardBack>}
            </div>
          </Card>
        ))}
      </GameGrid>
    </BoardContainer>
  );
}
