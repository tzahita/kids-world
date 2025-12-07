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

export const CrittersArea = styled.div`
  background: white;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  box-shadow: ${({ theme }) => theme.shadows.md};
  border: ${({ theme }) => theme.borders.thin};
  min-height: 300px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};
  position: relative;
`;

export const Critter = styled(motion.div)`
  font-size: 4rem;
  cursor: pointer;
  user-select: none;
`;

export const QuestionText = styled.h2`
  color: ${({ theme }) => theme.colors.textMain};
  font-family: ${({ theme }) => theme.typography.fontFun};
  font-size: 2rem;
  text-align: center;
`;

export const OptionsGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.lg};
  width: 100%;
`;

export const OptionButton = styled(motion.button)<{ $isCorrect?: boolean; $isWrong?: boolean }>`
  background: white;
  border: ${({ theme }) => theme.borders.thick};
  border-color: ${({ theme, $isCorrect, $isWrong }) => 
    $isCorrect ? theme.colors.success : 
    $isWrong ? theme.colors.error : 
    theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.lg};
  font-size: 3rem;
  font-family: ${({ theme }) => theme.typography.fontFun};
  color: ${({ theme }) => theme.colors.textMain};
  cursor: pointer;
  min-width: 100px;
  box-shadow: ${({ theme }) => theme.shadows.md};

  &:disabled {
    opacity: 0.7;
    cursor: default;
  }
`;
