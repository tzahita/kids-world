import styled from 'styled-components';
import { motion } from 'framer-motion';

export const BoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};
  width: 100%;
  height: 100%;
  overflow: hidden; /* Prevent scrolling inside board */
`;

export const StatsBar = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xl};
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.textMain};
`;

export const GameGrid = styled.div<{ $size: number }>`
  display: grid;
  grid-template-columns: repeat(${({ $size }) => $size}, 1fr);
  gap: ${({ theme }) => theme.spacing.xs};
  /* Use vh for max-width to ensure it stays square and fits on screen */
  max-width: 75vh; /* Reduced to 75vh for better fit */
  /* Also constrain by width for portrait phones */
  width: 100%; 
  
  aspect-ratio: 1; 
  padding: ${({ theme }) => theme.spacing.sm};
  
  /* Ensure it fits in viewport but acts bigger */
  max-height: 75vh; 
  align-self: center;
  margin: auto;
  grid-auto-rows: 1fr; /* Force equal row heights */
`;

export const Card = styled(motion.div)<{ $flipped: boolean; $matched: boolean }>`
  background: ${({ $flipped, $matched, theme }) => 
    $matched ? theme.colors.success : ($flipped ? 'white' : theme.colors.primary)};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: clamp(2rem, 5vw, 4rem); 
  box-shadow: ${({ theme }) => theme.shadows.md};
  border: ${({ theme }) => theme.borders.thick};
  border-color: ${({ $matched }) => 
    $matched ? '#1f2937' : '#1f2937'}; /* Always dark border */
  user-select: none;
  aspect-ratio: 1;
  overflow: hidden; 
  transition: transform 0.1s;

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 600px) {
    font-size: clamp(1.5rem, 4vw, 2.5rem); 
  }
`;

export const CardBack = styled.div`
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
`;

export const RestartButton = styled(motion.button)`
  background: ${({ theme }) => theme.colors.success};
  color: white;
  border: ${({ theme }) => theme.borders.thick};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
  font-size: 1.5rem;
  font-weight: bold;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  cursor: pointer;
  box-shadow: ${({ theme }) => theme.shadows.md};
  margin-top: ${({ theme }) => theme.spacing.md};
  font-family: ${({ theme }) => theme.typography.fontFun};
  z-index: 10;
  transition: transform 0.1s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }

  &:active {
    transform: translateY(0);
    box-shadow: ${({ theme }) => theme.shadows.sm};
  }
`;
