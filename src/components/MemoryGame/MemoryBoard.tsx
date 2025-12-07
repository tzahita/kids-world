import { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { triggerConfetti } from '../../utils/confetti';
import { theme } from '../../styles/theme';
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
  speechLang?: string;
}

export default function MemoryBoard({ items, speechLang }: MemoryBoardProps) {
  const { difficulty } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();
  
  // Parse player count from URL
  const queryParams = new URLSearchParams(location.search);
  const playerCount = queryParams.get('players') === '2' ? 2 : 1;

  const [cards, setCards] = useState<MemoryCard[]>([]);
  const [flipped, setFlipped] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [matchedCount, setMatchedCount] = useState(0);
  
  // Multiplayer State
  const [activePlayer, setActivePlayer] = useState(1); // 1 or 2
  const [scores, setScores] = useState({ 1: 0, 2: 0 });

  const gridSize = difficulty === 'hard' ? 8 : difficulty === 'medium' ? 6 : 4;
  const pairCount = (gridSize * gridSize) / 2;

  useEffect(() => {
    if (!items || items.length === 0) return;

    // Shuffle logic
    let pool = items;
    if (items.length < pairCount) {
        while (pool.length < pairCount) {
            pool = [...pool, ...items];
        }
    }
    
    const selectedItems = pool.slice(0, pairCount);
    
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
    setActivePlayer(1);
    setScores({ 1: 0, 2: 0 });
  }, [difficulty, pairCount, items]);

  // Speech handling
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);

  useEffect(() => {
    const updateVoices = () => {
      setVoices(window.speechSynthesis.getVoices());
    };
    
    updateVoices();
    window.speechSynthesis.addEventListener('voiceschanged', updateVoices);
    return () => {
      window.speechSynthesis.removeEventListener('voiceschanged', updateVoices);
    };
  }, []);

  const speak = (text: string) => {
    if (!speechLang) return;
    
    const textToSpeak = speechLang === 'en' ? text.toLowerCase() : text;
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.lang = speechLang === 'en' ? 'en-US' : 'he-IL';
    
    // Explicitly try to find a matching voice
    const voice = voices.find(v => v.lang.startsWith(speechLang === 'en' ? 'en' : 'he'));
    if (voice) {
        utterance.voice = voice;
    }

    utterance.rate = 0.8;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  };

  const handleCardClick = (index: number) => {
    if (flipped.length >= 2 || cards[index].isFlipped || cards[index].isMatched) return;

    // Announce the card if speech is enabled
    speak(cards[index].icon);

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
        
        // Update score for active player
        setScores(prev => ({
          ...prev,
          [activePlayer]: prev[activePlayer as keyof typeof prev] + 1
        }));

        setMatchedCount((p) => {
          const newCount = p + 1;
          if (newCount === pairCount) triggerConfetti();
          return newCount;
        });
        
        // KEEP TURN for active player (bonus turn)
      } else {
        // No match, switch turn after delay
        setTimeout(() => {
          setCards((prev) => {
            const resetCards = [...prev];
            resetCards[firstIndex].isFlipped = false;
            resetCards[index].isFlipped = false;
            return resetCards;
          });
          setFlipped([]);
          
          if (playerCount === 2) {
             setActivePlayer(current => current === 1 ? 2 : 1);
          }
        }, 1000);
      }
    }
  };

  const isWon = matchedCount === pairCount;

  const getWinnerMessage = () => {
    if (scores[1] > scores[2]) return t('memory.winner', { count: 1 });
    if (scores[2] > scores[1]) return t('memory.winner', { count: 2 });
    return t('memory.tie');
  };

  return (
    <BoardContainer>
      {!isWon && (
        <StatsBar>
          {playerCount === 1 ? (
             <>
               <span>{t('memory.moves')}: {moves}</span>
               <span>{t('memory.left')}: {pairCount - matchedCount}</span>
             </>
          ) : (
             <div style={{ display: 'flex', gap: '2rem' }}>
               <span style={{ 
                 color: activePlayer === 1 ? theme.colors.primary : theme.colors.textMuted,
                 textDecoration: activePlayer === 1 ? 'underline' : 'none'
               }}>
                 {t('memory.player1')}: {scores[1]}
               </span>
               <span style={{ 
                 color: activePlayer === 2 ? theme.colors.secondary : theme.colors.textMuted,
                 textDecoration: activePlayer === 2 ? 'underline' : 'none'
               }}>
                 {t('memory.player2')}: {scores[2]}
               </span>
             </div>
          )}
        </StatsBar>
      )}
      
      {isWon && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {playerCount === 2 && (
             <h2 style={{ fontFamily: theme.typography.fontFun, fontSize: '2rem', color: theme.colors.primary }}>
               {getWinnerMessage()}
             </h2>
          )}
          <RestartButton
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => navigate('..')}
          >
            {t('memory.playAgain')} 🔄
          </RestartButton>
        </div>
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
            <div style={{ 
              transform: (card.isFlipped || card.isMatched) ? 'rotateY(180deg)' : 'rotateY(0deg)',
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              {(card.isFlipped || card.isMatched) ? card.icon : <CardBack>?</CardBack>}
            </div>
          </Card>
        ))}
      </GameGrid>
    </BoardContainer>
  );
}
