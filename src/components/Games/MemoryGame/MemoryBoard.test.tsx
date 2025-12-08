import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, act } from '@testing-library/react';
import MemoryBoard from './MemoryBoard';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../styles/theme';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

describe('MemoryBoard', () => {
  const mockItems = ['🐶', '🐱']; // Simple items for easy matching

  const renderBoard = (difficulty = 'easy') => {
    return render(
      <ThemeProvider theme={theme}>
        <MemoryRouter initialEntries={[`/memory/${difficulty}`]}>
          <Routes>
            <Route path="/memory/:difficulty" element={<MemoryBoard items={mockItems} />} />
          </Routes>
        </MemoryRouter>
      </ThemeProvider>
    );
  };

  it('renders cards based on difficulty', () => {
    renderBoard('easy'); // 4x4 = 16 cards
    const cards = screen.getAllByText('?'); // Back of card
    expect(cards).toHaveLength(16);
  });

  it('flips a card on click', () => {
    renderBoard('easy');
    const cards = screen.getAllByText('?');
    
    act(() => {
        fireEvent.click(cards[0]);
    });
    
    // Check if one card is revealed (icon content)
    // Since we shuffled, we don't know exactly which icon, but '?' count should decrease or icon appear
    // Let's check that '?' count decreased by 1 (it actually flips, showing icon replaced/hidden back)
    // The implementation shows icon OR back.
    const remainingBacks = screen.getAllByText('?');
    expect(remainingBacks).toHaveLength(15);
  });
});
