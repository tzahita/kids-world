import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { theme } from '../../../styles/theme';
import DifficultySelection from '../../DifficultySelection/DifficultySelection';
import styled from 'styled-components';

// Keep PlayerButton styles locally as they are specific to this variant
const PlayerSelectionContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  background: white;
  padding: 0.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  border: ${({ theme }) => theme.borders.thin};
`;

const PlayerButton = styled.button<{ $isActive: boolean }>`
  background: ${({ $isActive, theme }) => $isActive ? theme.colors.primary : 'transparent'};
  color: ${({ $isActive, theme }) => $isActive ? 'white' : theme.colors.textMain};
  border: none;
  padding: 0.5rem 1.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  cursor: pointer;
  font-family: ${({ theme }) => theme.typography.fontFun};
  font-size: 1.1rem;
  transition: all 0.2s;

  &:hover {
    background: ${({ $isActive, theme }) => $isActive ? theme.colors.primary : theme.colors.background};
  }
`;

export default function MemoryDifficultySelection() {
  const { t } = useTranslation();
  const [playerCount, setPlayerCount] = useState<1 | 2>(1);

  const difficulties = [
    {
      id: 'easy',
      title: t('memory.difficulty.easy'),
      description: '4x4',
      icon: '👶',
      color: theme.colors.success,
      path: `easy?players=${playerCount}`
    },
    {
      id: 'medium',
      title: t('memory.difficulty.medium'),
      description: '6x6',
      icon: '👦',
      color: theme.colors.secondary,
      path: `medium?players=${playerCount}`
    },
    {
      id: 'hard',
      title: t('memory.difficulty.hard'),
      description: '8x8',
      icon: '🧠',
      color: theme.colors.error,
      path: `hard?players=${playerCount}`
    },
  ];

  return (
    <DifficultySelection 
      title={t('memory.selectDifficulty')} 
      options={difficulties}
    >
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
    </DifficultySelection>
  );
}
