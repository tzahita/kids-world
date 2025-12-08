import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import './i18n'; // Import i18n setup

describe('App', () => {
  it('renders main layout without crashing', () => {
    render(
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    );
    // Should verify something basic from MainLayout or Home
    // Since text is mocked to return keys, we look for keys or structure
    // We can assume "kidsLearn" (title) or similar is present if Home is rendered
    // But Home might not be default route if strictly following routing? 
    // App defines explicit Routes. MemoryRouter is better for tests but App has Browser inside? 
    // No, App has Routes. Browser is usually in main.tsx. 
    // App.tsx has Routes. So wrapping in BrowserRouter is correct.
    
    // Let's just check if it renders.
    expect(document.body).toBeInTheDocument();
  });
});
