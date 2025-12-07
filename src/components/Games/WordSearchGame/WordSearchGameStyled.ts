import styled, { css } from 'styled-components';


export const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.sm};
`;

export const GameBoard = styled.div<{ $size: number }>`
  display: grid;
  grid-template-columns: repeat(${({ $size }) => $size}, 1fr);
  grid-template-rows: repeat(${({ $size }) => $size}, 1fr);
  gap: 2px;
  background: ${({ theme }) => theme.colors.primary};
  padding: 4px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  aspect-ratio: 1;
  width: 100%;
  max-width: 500px;
  box-shadow: ${({ theme }) => theme.shadows.md};
  touch-action: none; /* Prevent scrolling while dragging */
`;

export const Cell = styled.div<{ $isSelected: boolean; $isFound: boolean }>`
  background: ${({ $isFound, $isSelected, theme }) => 
    $isFound ? theme.colors.success : 
    $isSelected ? theme.colors.secondaryLight : 'white'};
  
  color: ${({ $isFound, theme }) => 
    $isFound ? 'white' : theme.colors.textMain};

  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  user-select: none;
  border-radius: 4px;
  transition: background 0.2s, color 0.2s;
  
  ${({ $isFound }) => $isFound && css`
    animation: pop 0.3s ease-out;
  `}

  @keyframes pop {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
  }
`;

export const WordList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.md};
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing.sm};
`;

export const WordItem = styled.div<{ $found: boolean }>`
  font-size: 1.25rem;
  padding: 4px 12px;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  background: ${({ $found, theme }) => 
    $found ? theme.colors.success : 'white'};
  color: ${({ $found, theme }) => 
    $found ? 'white' : theme.colors.textMain};
  text-decoration: ${({ $found }) => $found ? 'line-through' : 'none'};
  transition: all 0.3s;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  display: flex;
  align-items: center;
  gap: 6px;
  opacity: ${({ $found }) => $found ? 0.6 : 1};
`;
export const RestartButton = styled.button`
  margin-top: ${({ theme }) => theme.spacing.lg};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
  font-size: 1.5rem;
  font-family: ${({ theme }) => theme.typography.fontFun};
  color: white;
  background: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  cursor: pointer;
  box-shadow: ${({ theme }) => theme.shadows.md};
  transition: transform 0.2s, background 0.2s;
  
  &:hover {
    transform: scale(1.05);
    background: ${({ theme }) => theme.colors.primaryHover};
  }
  
  &:active {
    transform: scale(0.95);
  }
`;
