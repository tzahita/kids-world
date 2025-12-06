import styled from 'styled-components';
import { motion } from 'framer-motion';

export const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xl};
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
`;

export const ProblemCard = styled(motion.div)`
  background: white;
  background: white;
  padding: 20px;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  width: 100%;
  text-align: center;
  border: 4px solid ${({ theme }) => theme.colors.primary};
`;

export const ProblemText = styled.h1`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.textMain};
  font-family: monospace; /* Helps align numbers */
  margin: 0;
  direction: ltr; /* Always LTR numbers */
  unicode-bidi: bidi-override;
`;

export const InputDisplay = styled.div<{ $isCorrect?: boolean }>`
  font-size: 2.5rem;
  min-height: 50px;
  color: ${({ theme, $isCorrect }) => 
    $isCorrect ? theme.colors.success : theme.colors.primary};
  margin-top: ${({ theme }) => theme.spacing.md};
  font-weight: bold;
  direction: ltr; /* Always LTR numbers */
`;

export const Keypad = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: ${({ theme }) => theme.spacing.sm};
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md};
  direction: ltr; /* Always LTR buttons */
`;

export const Key = styled(motion.button)<{ $action?: boolean }>`
  background: ${({ theme, $action }) => 
    $action ? theme.colors.secondary : theme.colors.surface};
  color: ${({ theme, $action }) => 
    $action ? 'white' : theme.colors.textMain};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: 1.5rem;
  font-weight: bold;
  height: 60px; /* Fixed compact height */
  cursor: pointer;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  display: flex;
  align-items: center;
  justify-content: center;

  &:active {
    background: ${({ theme }) => theme.colors.primary};
    color: white;
  }
`;

export const SubmitButton = styled(Key)`
  grid-column: span 4;
  aspect-ratio: auto;
  padding: 15px;
  background: ${({ theme }) => theme.colors.success};
  color: white;
  font-size: 2rem;
`;
