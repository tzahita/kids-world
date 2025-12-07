import styled from 'styled-components';
import { motion } from 'framer-motion';

export const QuizContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xl};
  padding: ${({ theme }) => theme.spacing.lg};
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`;

export const QuestionCard = styled(motion.div)`
  background: white;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: 40px;
  box-shadow: ${({ theme }) => theme.shadows.md};
  text-align: center;
  width: 100%;
`;

export const QuestionEmoji = styled.div`
  font-size: 8rem;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const QuestionText = styled.h2`
  color: ${({ theme }) => theme.colors.textMain};
  font-size: 1.5rem;
`;

export const OptionsGrid = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
  width: 100%;

  @media (min-width: 600px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

export const OptionButton = styled(motion.button)<{ $isCorrect?: boolean; $isWrong?: boolean }>`
  background: ${({ theme, $isCorrect, $isWrong }) => 
    $isCorrect ? theme.colors.success : 
    $isWrong ? theme.colors.error : 
    theme.colors.surface};
  color: ${({ theme, $isCorrect, $isWrong }) => 
    ($isCorrect || $isWrong) ? 'white' : theme.colors.primary};
  border: 2px solid ${({ theme, $isCorrect, $isWrong }) => 
    $isCorrect ? theme.colors.success : 
    $isWrong ? theme.colors.error : 
    theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  font-size: 2.5rem;
  font-weight: bold;
  padding: ${({ theme }) => theme.spacing.md};
  cursor: pointer;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  flex: 1;

  @media (min-width: 600px) {
    font-size: 4rem;
    padding: ${({ theme }) => theme.spacing.lg};
    border-width: 4px;
  }
`;

export const SpeakerButton = styled(motion.button)`
  background: ${({ theme }) => theme.colors.primary}20;
  color: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  cursor: pointer;
  margin: ${({ theme }) => theme.spacing.md} auto 0;
  transition: background-color 0.2s;
  
  &:hover {
    background: ${({ theme }) => theme.colors.primary}30;
  }
`;
