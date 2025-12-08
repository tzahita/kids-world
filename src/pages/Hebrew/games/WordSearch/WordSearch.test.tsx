import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import HebrewWordSearch from './WordSearch';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../../styles/theme';

vi.mock('../../../../components/Games/WordSearchGame/WordSearchGame', () => ({
  default: ({ language }: any) => <div data-testid="ws-game">{language}</div>
}));

describe('HebrewWordSearch', () => {
  it('renders game with hebrew config', () => {
    render(
      <ThemeProvider theme={theme}>
        <HebrewWordSearch />
      </ThemeProvider>
    );
    // Ensure we check for text content 'he' which is passed as language="he"
    expect(screen.getByTestId('ws-game')).toHaveTextContent('he');
  });
});
