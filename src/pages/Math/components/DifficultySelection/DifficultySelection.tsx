import { useTranslation } from 'react-i18next';
import { theme } from '../../../../styles/theme';
import {
  Container,
  Title,
  CardsGrid,
  DifficultyCard,
  CardIcon,
  CardTitle,
} from './DifficultySelectionStyled';

export default function DifficultySelection() {
  const { t } = useTranslation();

  const difficulties = [
    {
      id: 'easy',
      title: t('math.difficulty.easy'),
      icon: '🌱',
      color: theme.colors.success,
    },
    {
      id: 'medium',
      title: t('math.difficulty.medium'),
      icon: '🌲',
      color: theme.colors.secondary,
    },
    {
      id: 'hard',
      title: t('math.difficulty.hard'),
      icon: '🔥',
      color: theme.colors.error,
    },
  ];

  return (
    <Container>
      <Title>{t('math.selectDifficulty')}</Title>
      <CardsGrid>
        {difficulties.map((diff) => (
          <DifficultyCard key={diff.id} to={diff.id} $color={diff.color}>
            <CardIcon>{diff.icon}</CardIcon>
            <CardTitle $color={diff.color}>{diff.title}</CardTitle>
          </DifficultyCard>
        ))}
      </CardsGrid>
    </Container>
  );
}
