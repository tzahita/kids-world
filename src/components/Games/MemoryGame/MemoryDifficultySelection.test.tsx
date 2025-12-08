import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import MemoryDifficultySelection from './MemoryDifficultySelection';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../styles/theme';
import { MemoryRouter } from 'react-router-dom';

describe('MemoryDifficultySelection', () => {
  const renderSel = () => {
    return render(
      <ThemeProvider theme={theme}>
        <MemoryRouter>
          <MemoryDifficultySelection />
        </MemoryRouter>
      </ThemeProvider>
    );
  };

  it('renders difficulties', () => {
    renderSel();
    expect(screen.getByText('memory.selectDifficulty')).toBeInTheDocument();
    
    // Check titles
    expect(screen.getByText('memory.difficulty.easy')).toBeInTheDocument();
    expect(screen.getByText('memory.difficulty.medium')).toBeInTheDocument();
    expect(screen.getByText('memory.difficulty.hard')).toBeInTheDocument();
  });

  it('toggles player count', () => {
    renderSel();
    const p1Btn = screen.getByText(/memory.onePlayer/);
    const p2Btn = screen.getByText(/memory.twoPlayers/);
    
    // Default 1
    // Click 2
    fireEvent.click(p2Btn);
    
    // Check if links updated? 
    // The component updates `to` props of Cards.
    // We can check hrefs if we access the anchors.
    const easyCard = screen.getByText('memory.difficulty.easy').closest('a');
    expect(easyCard).toHaveAttribute('href', '/easy?players=2');
  });
});
