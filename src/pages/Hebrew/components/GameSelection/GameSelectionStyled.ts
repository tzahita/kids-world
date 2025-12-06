import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MenuGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  width: 100%;
  padding: ${({ theme }) => theme.spacing.lg};
`;

export const GameCard = styled(Link)`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  box-shadow: ${({ theme }) => theme.shadows.md};
  transition: transform 0.2s;
  color: ${({ theme }) => theme.colors.textMain};
  text-align: center;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`;

export const Icon = styled.span`
  font-size: 5rem;
  background: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: 50%;
  box-shadow: ${({ theme }) => theme.shadows.sm};
`;

export const GameTitle = styled.h2`
  font-size: 2rem;
  font-family: ${({ theme }) => theme.typography.fontFun};
  color: ${({ theme }) => theme.colors.primary};
`;

export const GameDescription = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.textMuted};
`;
