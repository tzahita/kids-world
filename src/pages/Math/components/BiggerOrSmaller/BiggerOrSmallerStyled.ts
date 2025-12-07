import styled from 'styled-components';
import { motion } from 'framer-motion';

export const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xl};
  padding: ${({ theme }) => theme.spacing.lg};
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`;

export const Question = styled(motion.h2)`
  color: ${({ theme }) => theme.colors.textMain};
  font-family: ${({ theme }) => theme.typography.fontFun};
  font-size: 2.5rem;
  text-align: center;
`;

export const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  width: 100%;
  max-width: 600px;
  
  @media (max-width: 600px) {
    gap: 1rem;
    padding: 0 1rem;
  }
`;

export const NumberCard = styled(motion.button)<{ $color?: string; $isCorrect?: boolean; $isWrong?: boolean }>`
  background: white;
  border: ${({ theme }) => theme.borders.thick};
  border-color: ${({ theme, $color, $isCorrect, $isWrong }) => 
    $isCorrect ? theme.colors.success : 
    $isWrong ? theme.colors.error : 
    $color || theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  font-size: 4rem;
  font-family: ${({ theme }) => theme.typography.fontFun};
  color: ${({ theme }) => theme.colors.textMain};
  cursor: pointer;
  box-shadow: ${({ theme }) => theme.shadows.md};
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};

  &:disabled {
    cursor: default;
  }

  @media (max-width: 600px) {
    font-size: 2.5rem;
    padding: ${({ theme }) => theme.spacing.md};
  }
`;

export const CardEmoji = styled.div`
  font-size: 5rem;
  line-height: 1;

  @media (max-width: 600px) {
    font-size: 3rem;
  }
`;
