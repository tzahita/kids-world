import styled from 'styled-components';
import { motion } from 'framer-motion';

export const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xl};
  padding: ${({ theme }) => theme.spacing.xl};
`;

export const Flashcard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: 60px;
  box-shadow: ${({ theme }) => theme.shadows.lg};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.lg};
  border: 4px solid ${({ theme }) => theme.colors.primary};
  width: 100%;
  max-width: 400px;
  aspect-ratio: 1;
`;

export const Letter = styled(motion.h1)`
  font-size: 8rem;
  color: ${({ theme }) => theme.colors.primary};
  margin: 0;
  line-height: 1;
`;

export const Word = styled.h2`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.textMuted};
  font-family: ${({ theme }) => theme.typography.fontFun};
`;

export const Controls = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const Button = styled(motion.button)`
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  box-shadow: ${({ theme }) => theme.shadows.md};
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
