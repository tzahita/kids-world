import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import EnglishMemory from './EnglishMemory';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../../styles/theme';
import { MemoryRouter } from 'react-router-dom';

vi.mock('../../../../components/Games/MemoryGame/MemoryDifficultySelection', () => ({
  default: () => <div>Selection</div>
}));

describe('EnglishMemory', () => {
  it('renders selection wrapper', () => {
    render(
      <ThemeProvider theme={theme}>
        <MemoryRouter>
          <EnglishMemory />
        </MemoryRouter>
      </ThemeProvider>
    );
    expect(screen.getByText('Selection')).toBeInTheDocument();
  });
});
