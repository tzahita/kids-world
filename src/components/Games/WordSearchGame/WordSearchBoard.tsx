import { useRef, useEffect } from 'react';
import { GameBoard, Cell } from './WordSearchGameStyled';

interface WordSearchBoardProps {
  grid: string[][];
  foundCells: Set<string>; // "r,c" strings
  currentSelection: string[]; // "r,c" strings of currently selected cells
  onSelectionStart: (r: number, c: number) => void;
  onSelectionMove: (r: number, c: number) => void;
  onSelectionEnd: () => void;
}

export default function WordSearchBoard({ 
  grid, 
  foundCells, 
  currentSelection, 
  onSelectionStart, 
  onSelectionMove, 
  onSelectionEnd 
}: WordSearchBoardProps) {
  
  // Refs for state and callbacks to avoid closure staleness in event listeners
  const isDraggingRef = useRef(false);
  const callbacksRef = useRef({ onSelectionStart, onSelectionMove, onSelectionEnd });
  
  // Update refs on every render
  useEffect(() => {
    callbacksRef.current = { onSelectionStart, onSelectionMove, onSelectionEnd };
  }, [onSelectionStart, onSelectionMove, onSelectionEnd]);

  useEffect(() => {
    const handlePointerUp = () => {
      if (isDraggingRef.current) {
        isDraggingRef.current = false;
        callbacksRef.current.onSelectionEnd();
      }
    };

    const handlePointerMove = (e: PointerEvent) => {
      if (isDraggingRef.current) {
        // Use elementFromPoint to get target under cursor, robust for touch & fast drags
        const target = document.elementFromPoint(e.clientX, e.clientY);
        const cell = target?.closest('[data-cell="true"]');
        
        if (cell instanceof HTMLElement) {
          const r = parseInt(cell.dataset.row || '-1');
          const c = parseInt(cell.dataset.col || '-1');
          
          if (r >= 0 && c >= 0) {
            callbacksRef.current.onSelectionMove(r, c);
          }
        }
      }
    };

    window.addEventListener('pointerup', handlePointerUp);
    window.addEventListener('pointermove', handlePointerMove);
    
    return () => {
      window.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('pointermove', handlePointerMove);
    };
  }, []);

  const handlePointerDown = (r: number, c: number) => {
    isDraggingRef.current = true;
    callbacksRef.current.onSelectionStart(r, c);
  };

  const size = grid.length;

  return (
    <GameBoard $size={size}>
      {grid.map((row, r) => 
        row.map((letter, c) => {
          const key = `${r},${c}`;
          const isSelected = currentSelection.includes(key);
          const isFound = foundCells.has(key);

          return (
            <Cell
              key={key}
              data-cell="true"
              data-row={r}
              data-col={c}
              $isSelected={isSelected}
              $isFound={isFound}
              onPointerDown={(e) => {
                  e.preventDefault(); // Prevent scrolling on touch
                  handlePointerDown(r, c);
              }}
            >
              {letter}
            </Cell>
          );
        })
      )}
    </GameBoard>
  );
}
