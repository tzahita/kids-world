import { useNavigate } from 'react-router-dom';
import {
  Container,
  Title,
  Grid,
  Card,
  IconWrapper,
  GameTitle,
  GameDesc
} from './GameSelectionStyled';

export interface GameOption {
  id: string;
  path: string;
  title: string;
  description?: string;
  icon: string;
  color?: string;
}

interface GameSelectionProps {
  title?: string;
  games: GameOption[];
}

export default function GameSelection({ title, games }: GameSelectionProps) {
  const navigate = useNavigate();

  return (
    <Container>
      {title && <Title>{title}</Title>}
      <Grid>
        {games.map((game) => (
          <Card
            key={game.id}
            onClick={() => navigate(game.path)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            $color={game.color}
            data-testid={`game-card-${game.id}`}
          >
            <IconWrapper>{game.icon}</IconWrapper>
            <GameTitle>{game.title}</GameTitle>
            {game.description && <GameDesc>{game.description}</GameDesc>}
          </Card>
        ))}
      </Grid>
    </Container>
  );
}
