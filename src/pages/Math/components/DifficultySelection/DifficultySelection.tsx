import { useTranslation } from 'react-i18next';
import { theme } from '../../../../styles/theme';
import DifficultySelection from '../../../../components/DifficultySelection/DifficultySelection';

export default function MathDifficultySelection() {
  const { t } = useTranslation();

  const difficulties = [
    {
      id: 'easy',
      title: t('math.difficulty.easy'),
      icon: '🌱',
      color: theme.colors.success,
      path: 'easy'
    },
    {
      id: 'medium',
      title: t('math.difficulty.medium'),
      icon: '🌲',
      color: theme.colors.secondary,
      path: 'medium'
    },
    {
      id: 'hard',
      title: t('math.difficulty.hard'),
      icon: '🔥',
      color: theme.colors.error,
      path: 'hard'
    },
  ];

  return (
    <DifficultySelection 
      title={t('math.selectDifficulty')} 
      options={difficulties} 
    />
  );
}
