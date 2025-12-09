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

export const QuestionText = styled.h2`
  color: ${({ theme }) => theme.colors.textMain};
  font-family: ${({ theme }) => theme.typography.fontFun};
  font-size: 2rem;
  text-align: center;
`;

export const PatternArea = styled.div`
  background: white;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  box-shadow: ${({ theme }) => theme.shadows.md};
  border: ${({ theme }) => theme.borders.thin};
  width: 100%;
  display: flex;
  flex-direction: row; /* Explicitly set to row */
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  min-height: 150px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing.sm}; /* Reduce container padding */
    gap: ${({ theme }) => theme.spacing.xs}; /* Reduce gap */
    min-height: 100px;
  }
`;

export const PatternItem = styled(motion.div)<{ $isPlaceholder?: boolean }>`
  font-size: 4rem;
  padding: ${({ theme }) => theme.spacing.md};
  border: ${({ theme, $isPlaceholder }) => $isPlaceholder ? `3px dashed ${theme.colors.textMuted}` : 'none'};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background: ${({ theme, $isPlaceholder }) => $isPlaceholder ? theme.colors.surface : 'transparent'};
  min-width: 80px;
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    font-size: 2rem; /* Smaller icons */
    padding: ${({ theme }) => theme.spacing.xs}; /* Smaller padding */
    min-width: 50px; /* Smaller min width */
    min-height: 50px;
    border-width: ${({ $isPlaceholder }) => $isPlaceholder ? '2px' : '0'};
  }
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
  font-size: 3.5rem;
  cursor: pointer;
  box-shadow: ${({ theme }) => theme.shadows.md};
  min-width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;
