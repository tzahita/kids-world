import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { theme } from '../../styles/theme';
import { 
  Container, 
  Title, 
  CardsGrid, 
  DifficultyCard, 
  CardIcon, 
  CardTitle, 
  CardDesc,
  PlayerSelectionContainer,
  PlayerButton
} from './MemoryDifficultySelectionStyled';

export default function MemoryDifficultySelection() {
  const { t } = useTranslation();
  const [playerCount, setPlayerCount] = useState<1 | 2>(1);

  const difficulties = [
    {
      id: 'easy',
      title: t('memory.difficulty.easy'),
      desc: '4x4',
      icon: '👶',
      color: theme.colors.success,
    },
    {
      id: 'medium',
      title: t('memory.difficulty.medium'),
      desc: '6x6',
      icon: '👦',
      color: theme.colors.secondary,
    },
    {
      id: 'hard',
      title: t('memory.difficulty.hard'),
      desc: '8x8',
      icon: '🧠',
      color: theme.colors.error,
    },
  ];

  return (
    <Container>
      <Title>{t('memory.selectDifficulty')}</Title>
      
      <PlayerSelectionContainer>
        <PlayerButton 
          $isActive={playerCount === 1} 
          onClick={() => setPlayerCount(1)}
        >
          👤 {t('memory.onePlayer')}
        </PlayerButton>
        <PlayerButton 
          $isActive={playerCount === 2} 
          onClick={() => setPlayerCount(2)}
        >
          👥 {t('memory.twoPlayers')}
        </PlayerButton>
      </PlayerSelectionContainer>

      <CardsGrid>
        {difficulties.map((diff) => (
          <DifficultyCard 
            key={diff.id} 
            to={`${diff.id}?players=${playerCount}`} 
            $color={diff.color}
          >
            <CardIcon>{diff.icon}</CardIcon>
            <CardTitle $color={diff.color}>{diff.title}</CardTitle>
            <CardDesc>{diff.desc}</CardDesc>
          </DifficultyCard>
        ))}
      </CardsGrid>
    </Container>
  );
}
