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

import { Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
};

export default function GameSelection({ title, games }: GameSelectionProps) {
  const navigate = useNavigate();
  // Fallback colors for games that don't specify one
  const colors = ['#FF6B6B', '#FFA502', '#48DBFB', '#1DD1A1', '#FF4757', '#a29bfe'];

  return (
    <Container>
      {title && <Title>{title}</Title>}
      <Grid
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {games.map((game, index) => {
          const cardColor = game.color || colors[index % colors.length];
          return (
            <Card
              key={game.id}
              onClick={() => navigate(game.path)}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05,
                y: -5,
                borderColor: cardColor
              }}
              whileTap={{ scale: 0.95 }}
              $color={cardColor}
              data-testid={`game-card-${game.id}`}
            >
              <IconWrapper $bgColor={cardColor}>{game.icon}</IconWrapper>
              <GameTitle>{game.title}</GameTitle>
              {game.description && <GameDesc>{game.description}</GameDesc>}
            </Card>
          );
        })}
      </Grid>
    </Container>
  );
}
