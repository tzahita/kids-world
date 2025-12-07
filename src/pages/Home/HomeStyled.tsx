import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled(motion.h1)`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.05);

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: ${({ theme }) => theme.spacing.md};
  width: 100%;
  padding: ${({ theme }) => theme.spacing.sm};
`;

export const Card = styled(motion(Link))`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.lg};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  box-shadow: ${({ theme }) => theme.shadows.md};
  text-align: center;
  border: ${({ theme }) => theme.borders.thick};
  border-color: transparent; /* Or specific color, but hover will animate it? Let's use thick border always visible */
  border: ${({ theme }) => theme.borders.thick};
  cursor: pointer;
  text-decoration: none;
  transition: transform 0.2s, box-shadow 0.2s;
  
  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`;

export const IconWrapper = styled(motion.div)<{ $bgColor: string }>`
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
  background-color: ${({ theme, $bgColor }) => theme.colors[$bgColor] || $bgColor};
`;

export const Label = styled.h2`
  font-family: ${({ theme }) => theme.typography.fontFun};
  color: ${({ theme }) => theme.colors.textMain};
  font-size: 1.5rem;
`;
