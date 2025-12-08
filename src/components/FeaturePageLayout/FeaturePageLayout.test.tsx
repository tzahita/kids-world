import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import FeaturePageLayout from './FeaturePageLayout';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';
import { MemoryRouter } from 'react-router-dom';

describe('FeaturePageLayout', () => {
  const renderWithTheme = (component: React.ReactNode) => {
    return render(
      <ThemeThemeWrapper>
        {component}
      </ThemeThemeWrapper>
    );
  };

  // Helper wrapper for theme
  const ThemeThemeWrapper = ({ children }: { children: React.ReactNode }) => (
    <ThemeProvider theme={theme}>
      <MemoryRouter>
        {children}
      </MemoryRouter>
    </ThemeProvider>
  );

  it('renders title and emoji correctly', () => {
    renderWithTheme(
      <FeaturePageLayout 
        title="Test Title" 
        emoji="🧪" 
        color="#000"
      >
        <div>Child Content</div>
      </FeaturePageLayout>
    );

    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('🧪')).toBeInTheDocument();
    expect(screen.getByText('Child Content')).toBeInTheDocument();
  });

  it('hides header when hideHeader is true', () => {
    renderWithTheme(
        <FeaturePageLayout 
          title="Test Title" 
          emoji="🧪" 
          color="#000"
          hideHeader={true}
        >
          <div>Child Content</div>
        </FeaturePageLayout>
      );
  
      expect(screen.queryByText('Test Title')).not.toBeInTheDocument();
      expect(screen.queryByText('🧪')).not.toBeInTheDocument();
      expect(screen.getByText('Child Content')).toBeInTheDocument();
  });
});
