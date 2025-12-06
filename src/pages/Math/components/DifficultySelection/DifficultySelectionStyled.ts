import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};
  width: 100%;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.typography.fontFun};
  font-size: 2rem;
  text-align: center;
`;

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  width: 100%;
  max-width: 800px;
  padding: ${({ theme }) => theme.spacing.md};
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
  border: 4px solid ${({ $color }) => $color};
  transition: transform 0.2s;
  height: 200px;

  &:hover {
    transform: scale(1.05);
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
