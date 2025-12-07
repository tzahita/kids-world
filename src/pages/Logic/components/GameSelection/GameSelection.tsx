import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Container, Title, Grid, GameCard, IconWrapper, GameTitle, GameDesc } from './GameSelectionStyled';

export default function GameSelection() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const games = [
    {
      id: 'simon-says',
      title: t('logic.games.simonSays.title'),
      desc: t('logic.games.simonSays.desc'),
      icon: '🔔',
      path: 'simon-says',
      color: '#FFD700' // Gold
    },
    {
      id: 'shadow-match',
      title: t('logic.games.shadowMatch.title'),
      desc: t('logic.games.shadowMatch.desc'),
      icon: '👥',
      path: 'shadow-match',
      color: '#A9A9A9' // Dark Gray
    }
  ];

  return (
    <Container>
      <Title>{t('logic.selectGame')}</Title>
      <Grid>
        {games.map((game) => (
          <GameCard
            key={game.id}
            onClick={() => navigate(game.path)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            $color={game.color}
          >
            <IconWrapper>{game.icon}</IconWrapper>
            <GameTitle>{game.title}</GameTitle>
            <GameDesc>{game.desc}</GameDesc>
          </GameCard>
        ))}
      </Grid>
    </Container>
  );
}
