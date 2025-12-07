import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};
  width: 100%;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.textMain};
  font-family: ${({ theme }) => theme.typography.fontFun};
  font-size: 2rem;
  text-align: center;
`;

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  width: 100%;
  max-width: 900px;
  padding: ${({ theme }) => theme.spacing.md};
  justify-content: center;
`;

export const DifficultyCard = styled(Link)<{ $color: string }>`
  background: white;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.md};
  box-shadow: ${({ theme }) => theme.shadows.md};
  border: ${({ theme }) => theme.borders.thick};
  border-color: ${({ $color }) => $color};
  transition: all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1); /* Bouncy spring */
  height: 220px;

  &:hover {
    transform: translateY(-4px) scale(1.02);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }

  &:active {
    transform: translateY(0) scale(0.98);
    box-shadow: ${({ theme }) => theme.shadows.sm};
  }
`;

export const CardIcon = styled.div`
  font-size: 3rem;
`;

export const CardTitle = styled.h3<{ $color: string }>`
  color: ${({ $color }) => $color};
  font-size: 1.5rem;
  font-weight: bold;
`;

export const CardDesc = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 1rem;
`;

export const PlayerSelectionContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  background: white;
  padding: ${({ theme }) => theme.spacing.xs};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  box-shadow: ${({ theme }) => theme.shadows.md};
  border: ${({ theme }) => theme.borders.thin};
`;

export const PlayerButton = styled(motion.button)<{ $isActive: boolean }>`
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  border: ${({ theme, $isActive }) => $isActive ? theme.borders.thick : '3px solid transparent'};
  background: ${({ $isActive, theme }) => 
    $isActive ? theme.colors.primary : 'transparent'};
  color: ${({ $isActive, theme }) => 
    $isActive ? 'white' : theme.colors.textMuted};
  font-family: ${({ theme }) => theme.typography.fontFun};
  font-weight: bold;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    color: ${({ $isActive, theme }) => 
      $isActive ? 'white' : theme.colors.primary};
    transform: ${({ $isActive }) => $isActive ? 'translateY(-2px)' : 'none'};
  }
`;
