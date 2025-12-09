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

export const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  padding: 1rem;
  justify-items: center;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    padding: 0.5rem;
  }
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
  box-shadow: ${({ theme }) => theme.shadows.md};
  border: ${({ theme }) => theme.borders.thick};
  transition: all 0.3s ease;
  text-decoration: none;
  color: inherit;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
    border-color: ${({ theme, $color }) => $color || theme.colors.primary};
  }

  @media (max-width: 768px) {
    padding: 0.75rem;
    gap: 0.5rem;
    border-radius: ${({ theme }) => theme.borderRadius.md};
  }
`;

export const IconWrapper = styled.div<{ $bgColor?: string }>`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: white;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  border: ${({ theme }) => theme.borders.thin};
  background-color: ${({ theme, $bgColor }) => $bgColor || theme.colors.primary};
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    font-size: 1.8rem;
    margin-bottom: 0.25rem;
  }
`;

export const GameTitle = styled.h3`
  font-family: ${({ theme }) => theme.typography.fontFun};
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const GameDesc = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textLight};
  text-align: center;
  margin: 0;
  line-height: 1.4;
  
  @media (max-width: 768px) {
    display: none;
  }
`;
