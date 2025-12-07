import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      primaryHover: string;
      secondary: string;
      secondaryLight: string;
      accent: string;
      success: string;
      error: string;
      background: string;
      surface: string;
      textMain: string;
      textMuted: string;
      glass: {
        bg: string;
        border: string;
        blur: string;
      };
    };
    typography: {
      fontMain: string;
      fontFun: string;
    };
    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    borderRadius: {
      md: string;
      lg: string;
      xl: string;
      full: string;
    };
    borders: {
      thick: string;
      thin: string;
      color: string;
    };
    shadows: {
      sm: string;
      md: string;
      lg: string;
    };
  }
}
