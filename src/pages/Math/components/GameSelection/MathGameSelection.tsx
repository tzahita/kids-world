import { useTranslation } from 'react-i18next';
import {
  Container,
  Title,
  CardsGrid,
  GameCard,
  CardIcon,
  CardTitle,
} from './MathGameSelectionStyled';

export default function MathGameSelection() {
  const { t } = useTranslation();

  const games = [
    {
      id: 'arithmetic',
      title: t('math.games.arithmetic'),
      icon: '🧮',
      path: 'arithmetic'
    },
    {
      id: 'count-critters',
      title: t('math.games.countCritters'),
      icon: '🐸',
      path: 'count-critters'
    },
    {
      id: 'bigger-smaller',
      title: t('math.games.biggerSmaller'),
      icon: '⚖️',
      path: 'bigger-smaller'
    },
    {
      id: 'patterns',
      title: t('math.games.patterns'),
      icon: '🎨',
      path: 'patterns'
    }
  ];

  return (
    <Container>
      <Title>{t('math.selectGame')}</Title>
      <CardsGrid>
        {games.map((game) => (
          <GameCard key={game.id} to={game.path}>
            <CardIcon>{game.icon}</CardIcon>
            <CardTitle>{game.title}</CardTitle>
          </GameCard>
        ))}
      </CardsGrid>
    </Container>
  );
}
