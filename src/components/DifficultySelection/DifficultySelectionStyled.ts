import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 1rem;
  width: 100%;
`;

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.typography.fontFun};
  color: ${({ theme }) => theme.colors.textMain};
  font-size: 2rem;
  text-align: center;
`;

export const CardsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  width: 100%;
  max-width: 900px;
  justify-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    gap: 0.5rem;
    padding: 0 0.5rem;
    /* User explicitly requested 3 in a row on mobile */
    grid-template-columns: repeat(3, 1fr); 
  }
`;

export const DifficultyCard = styled(motion(Link))<{ $color: string }>` // Link for navigation
  background: white;
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  aspect-ratio: 1/1; // Keep it square-ish
  max-width: 250px;
  text-decoration: none;
  border: ${({ theme }) => theme.borders.thick};
  border-color: transparent; // Default like Home
  box-shadow: ${({ theme }) => theme.shadows.md};
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
    border-color: ${({ $color }) => $color};
  }

  @media (max-width: 768px) {
    padding: 0.5rem;
    gap: 0.5rem;
    border-radius: ${({ theme }) => theme.borderRadius.md};
  }
`;

export const CardIcon = styled.div`
  font-size: 4rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const CardTitle = styled.h3<{ $color: string }>`
  font-family: ${({ theme }) => theme.typography.fontFun};
  color: ${({ theme }) => theme.colors.textMain};
  font-size: 1.5rem;
  margin: 0;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const CardDesc = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 1rem;
  margin: 0;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 0.8rem;
    // Hide description on very small screens if needed, but user didn't ask to hide it. 
    // I'll keep it but small.
  }
`;
