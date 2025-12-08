import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
`;

export const Title = styled.h2`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  margin-bottom: 1rem;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  padding: 1rem;
  justify-items: center;
`;

export const Card = styled(motion.div)<{ $color?: string }>`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  width: 100%;
  max-width: 350px;
  cursor: pointer;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border: 2px solid ${({ theme, $color }) => $color || theme.colors.surface};
  transition: all 0.3s ease;
  text-decoration: none;
  color: inherit;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 48px rgba(0, 0, 0, 0.15);
    border-color: ${({ theme, $color }) => $color || theme.colors.primary};
  }
`;

export const IconWrapper = styled.div`
  font-size: 4rem;
  margin-bottom: 0.5rem;
`;

export const GameTitle = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  margin: 0;
`;

export const GameDesc = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textLight};
  text-align: center;
  margin: 0;
  line-height: 1.4;
`;
