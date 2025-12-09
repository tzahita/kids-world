import {
  Container,
  Title,
  CardsGrid,
  DifficultyCard,
  CardIcon,
  CardTitle,
  CardDesc
} from './DifficultySelectionStyled';
import { containerVariants, cardVariants, DifficultySelectionProps } from './types';

export default function DifficultySelection({ title, options, children }: DifficultySelectionProps) {
  return (
    <Container>
      <Title>{title}</Title>
      
      {children}

      <CardsGrid
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {options.map((option) => (
          <DifficultyCard
            key={option.id}
            to={option.path}
            $color={option.color}
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <CardIcon>{option.icon}</CardIcon>
            <CardTitle $color={option.color}>{option.title}</CardTitle>
            {option.description && <CardDesc>{option.description}</CardDesc>}
          </DifficultyCard>
        ))}
      </CardsGrid>
    </Container>
  );
}
