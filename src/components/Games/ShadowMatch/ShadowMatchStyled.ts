import styled from 'styled-components';
import { motion } from 'framer-motion';

export const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.typography.fontFun};
  color: ${({ theme }) => theme.colors.textMain};
  font-size: 2.5rem;
  text-align: center;
`;

export const MainItemContainer = styled(motion.div)`
  font-size: 8rem;
  padding: 2rem;
  background: white;
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  border: ${({ theme }) => theme.borders.thick} ${({ theme }) => theme.colors.primary};
`;

export const ShadowsGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;


  @media (max-width: 768px) {
    flex-wrap: nowrap;
    gap: 0.5rem;
    width: 100%;
    margin-top: 1rem;
  }
`;

export const ShadowCard = styled(motion.button)<{ $isCorrect?: boolean; $isWrong?: boolean; $revealed?: boolean }>`
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 6rem;
  padding: 1rem;

  @media (max-width: 768px) {
    font-size: 3.5rem; /* Smaller to fit 3 in a row */
    padding: 0.5rem;
    flex: 1; /* Distribute space evenly */
  }
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  
  /* The Magic Shadow Effect */
  filter: ${({ $revealed }) => $revealed ? 'none' : 'brightness(0) contrast(0%)'};
  transition: transform 0.2s, filter 0.5s;
  opacity: 0.8;

  &:hover {
    transform: scale(1.1);
    opacity: 1;
  }

  border: ${({ theme, $isCorrect, $isWrong }) => 
    $isCorrect ? `4px solid ${theme.colors.success}` : 
    $isWrong ? `4px solid ${theme.colors.error}` : 
    'none'};
`;

export const NextButton = styled(motion.button)`
  background: ${({ theme }) => theme.colors.secondary};
  color: white;
  border: none;
  font-family: ${({ theme }) => theme.typography.fontFun};
  font-size: 1.5rem;
  padding: 0.8rem 2rem;
  border-radius: 2rem;
  cursor: pointer;
  box-shadow: ${({ theme }) => theme.shadows.md};
  margin-top: 2rem;
  
  &:hover {
    transform: scale(1.05);
  }
`;
