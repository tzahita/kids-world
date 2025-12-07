import styled from 'styled-components';
import { motion } from 'framer-motion';

export const GameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xl};
  padding: ${({ theme }) => theme.spacing.lg};
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.typography.fontFun};
  font-size: 2rem;
  text-align: center;
`;

export const SoundButton = styled(motion.button)`
  background: white;
  border: ${({ theme }) => theme.borders.thick};
  border-radius: 50%;
  width: 150px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 5rem;
  cursor: pointer;
  box-shadow: ${({ theme }) => theme.shadows.lg};
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: ${({ theme }) => theme.spacing.xl};

  &:hover {
    transform: scale(1.05);
  }
  
  &:active {
    transform: scale(0.95);
  }
`;

export const OptionsGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xl};
  width: 100%;
  flex-wrap: wrap;
`;

export const OptionCard = styled(motion.button)<{ $isCorrect?: boolean; $isWrong?: boolean }>`
  background: white;
  border: ${({ theme }) => theme.borders.thick};
  border-color: ${({ theme, $isCorrect, $isWrong }) => 
    $isCorrect ? theme.colors.success : 
    $isWrong ? theme.colors.error : 
    theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  font-size: 6rem;
  cursor: pointer;
  box-shadow: ${({ theme }) => theme.shadows.md};
  min-width: 180px;
  min-height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-color 0.3s;

  &:disabled {
    cursor: default;
    opacity: 0.8;
  }
`;
