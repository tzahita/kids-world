import styled from 'styled-components';
import { motion } from 'framer-motion';

export const GameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  padding: ${({ theme }) => theme.spacing.xs};
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

export const FlowerContainer = styled.div`
  width: 200px;
  height: 150px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const FlowerPart = styled(motion.div)<{ $color?: string }>`
  position: absolute;
  font-size: 8rem;
  line-height: 1;
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));
  role: img;
`;

export const WordDisplay = styled.div<{ $direction?: 'ltr' | 'rtl' }>`
  display: flex;
  direction: ${({ $direction }) => $direction || 'ltr'};
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  flex-wrap: wrap;
  justify-content: center;
`;

export const LetterSlot = styled.div`
  width: 40px;
  height: 50px;
  border-bottom: 3px solid ${({ theme }) => theme.colors.textMain};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: bold;
  font-family: ${({ theme }) => theme.typography.fontMain};
  color: ${({ theme }) => theme.colors.textMain};
`;

export const KeyboardGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
  justify-content: center;
  max-width: 600px;
`;

export const KeyButton = styled(motion.button)<{ $status?: 'correct' | 'wrong' | 'unused' }>`
  width: 40px;
  height: 40px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: ${({ theme }) => theme.borders.thin};
  background: ${({ theme, $status }) => 
    $status === 'correct' ? theme.colors.success : 
    $status === 'wrong' ? theme.colors.surface : 
    'white'};
  color: ${({ theme, $status }) => 
    $status === 'wrong' ? theme.colors.textMuted : 
    theme.colors.textMain};
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  opacity: ${({ $status }) => $status === 'wrong' ? 0.6 : 1};
  pointer-events: ${({ $status }) => $status !== 'unused' ? 'none' : 'auto'};
  
  &:hover {
    transform: ${({ $status }) => $status === 'unused' ? 'scale(1.1)' : 'none'};
  }
`;
