import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xl};
  padding: ${({ theme }) => theme.spacing.xl};
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  font-family: ${({ theme }) => theme.typography.fontFun};
  color: ${({ theme }) => theme.colors.textMain};
  text-align: center;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  width: 100%;
  max-width: 1000px;
`;

export const GameCard = styled(motion.div)<{ $color?: string }>`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  box-shadow: ${({ theme }) => theme.shadows.md};
  cursor: pointer;
  border: 4px solid ${({ $color, theme }) => $color || theme.colors.primary};
  text-decoration: none;
`;

export const IconWrapper = styled.div`
  font-size: 4rem;
  line-height: 1;
`;

export const GameTitle = styled.h3`
  font-size: 1.8rem;
  font-family: ${({ theme }) => theme.typography.fontFun};
  color: ${({ theme }) => theme.colors.textMain};
  text-align: center;
`;

export const GameDesc = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.textMuted};
  text-align: center;
`;
