import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Home from './Home';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';
import { MemoryRouter } from 'react-router-dom';

describe('Home Page', () => {
  const renderPage = () => {
    return render(
      <ThemeProvider theme={theme}>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </ThemeProvider>
    );
  };

  it('renders welcome message', () => {
    renderPage();
    expect(screen.getByText('home.welcome')).toBeInTheDocument();
  });

  it('renders feature cards', () => {
    renderPage();
    // Check for keys of features
    expect(screen.getByText('home.math')).toBeInTheDocument();
    expect(screen.getByText('home.hebrew')).toBeInTheDocument();
    expect(screen.getByText('home.english')).toBeInTheDocument();
    expect(screen.getByText('home.memory')).toBeInTheDocument();
    expect(screen.getByText('home.logic')).toBeInTheDocument();
  });
});
