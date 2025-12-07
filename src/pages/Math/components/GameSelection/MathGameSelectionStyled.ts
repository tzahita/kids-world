import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xl};
  padding: ${({ theme }) => theme.spacing.lg};
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`;

export const Title = styled.h2`
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.typography.fontFun};
  font-size: 2.5rem;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  width: 100%;
`;

export const GameCard = styled(Link)`
  background: white;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  transition: transform 0.2s, box-shadow 0.2s;
  border: ${({ theme }) => theme.borders.thin};
  box-shadow: ${({ theme }) => theme.shadows.md};

  &:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`;

export const CardIcon = styled.div`
  font-size: 4rem;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const CardTitle = styled.h3`
  color: ${({ theme }) => theme.colors.textMain};
  font-family: ${({ theme }) => theme.typography.fontFun};
  font-size: 1.5rem;
  text-align: center;
  margin: 0;
`;
