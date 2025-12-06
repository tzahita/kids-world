import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* Vertical centering */
  gap: ${({ theme }) => theme.spacing.lg};
  width: 100%;
  flex: 1; /* Take available space */
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.typography.fontFun};
  font-size: 2rem;
  text-align: center;
`;

export const OperationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing.lg};
  width: 100%;
  max-width: 600px;
  justify-content: center; /* Center the grid */
  align-content: center;
  padding: ${({ theme }) => theme.spacing.md};
  
  @media (min-width: 600px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const OperationCard = styled(Link)`
  background: white;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: ${({ theme }) => theme.shadows.md};
  transition: transform 0.2s;
  aspect-ratio: 1;

  &:hover {
    transform: scale(1.1);
  }
`;

export const OperationSymbol = styled.div`
  font-size: 4rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.textMain};
`;
