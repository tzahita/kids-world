import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import HebrewMemory from './HebrewMemory';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../../styles/theme';
import { MemoryRouter, Routes, Route } from 'react-router-dom';

// Mock child components to verify props passing
vi.mock('../../../../../components/Games/MemoryGame/MemoryBoard', () => ({
  default: ({ items, speechLang }: any) => (
    <div data-testid="memory-board">
      Items: {items.length} Lang: {speechLang}
    </div>
  )
}));

vi.mock('../../../../components/Games/MemoryGame/MemoryDifficultySelection', () => ({
  default: () => <div>Selection</div>
}));

describe('HebrewMemory', () => {
  it('renders selection by default', () => {
     render(
      <ThemeProvider theme={theme}>
        <MemoryRouter initialEntries={['/']}>
           <HebrewMemory />
        </MemoryRouter>
      </ThemeProvider>
    );
     expect(screen.getByText('Selection')).toBeInTheDocument();
  });
});
