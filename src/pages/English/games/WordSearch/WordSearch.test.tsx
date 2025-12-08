import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import EnglishWordSearch from './WordSearch';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../../styles/theme';

vi.mock('../../../../components/Games/WordSearchGame/WordSearchGame', () => ({
  default: ({ language }: any) => <div data-testid="ws-game">{language}</div>
}));

describe('EnglishWordSearch', () => {
  it('renders game with english config', () => {
    render(
      <ThemeProvider theme={theme}>
        <EnglishWordSearch />
      </ThemeProvider>
    );
    expect(screen.getByTestId('ws-game')).toHaveTextContent('en');
  });
});
