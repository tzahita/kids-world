import styled from 'styled-components';
import { motion } from 'framer-motion';

export const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
  max-width: 600px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.typography.fontFun};
  color: ${({ theme }) => theme.colors.textMain};
  font-size: 2.5rem;
  text-align: center;
`;

export const StatusText = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.textMuted};
  height: 2rem; 
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SimonGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  padding: 1.5rem;
  background: white;
  border-radius: 50%;
  box-shadow: ${({ theme }) => theme.shadows.lg};
  width: 100%;
  aspect-ratio: 1;
  position: relative;
`;

export const ColorButton = styled(motion.button)<{ $color: string; $isActive: boolean }>`
  border: none;
  border-radius: 1rem;
  background-color: ${({ $color }) => $color};
  cursor: pointer;
  opacity: ${({ $isActive }) => ($isActive ? 1 : 0.6)};
  box-shadow: ${({ theme, $isActive }) => 
    $isActive 
      ? `0 0 30px ${theme.colors.textMain}40` 
      : 'none'};
  transition: opacity 0.1s, transform 0.1s;
  
  /* Make them look like quadrants of a circle if desired, or just rounded squares */
  width: 100%;
  height: 100%;

  &:active {
    transform: scale(0.95);
  }
`;

export const StartButton = styled(motion.button)`
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  font-family: ${({ theme }) => theme.typography.fontFun};
  font-size: 1.5rem;
  padding: 0.8rem 2rem;
  border-radius: 2rem;
  cursor: pointer;
  box-shadow: ${({ theme }) => theme.shadows.md};
  
  &:hover {
    transform: scale(1.05);
  }
  
  &:active {
    transform: scale(0.95);
  }
`;

export const Score = styled.div`
  font-size: 2rem;
  font-family: ${({ theme }) => theme.typography.fontFun};
  color: ${({ theme }) => theme.colors.secondary};
`;
