import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      primaryHover: string;
      secondary: string;
      accent: string;
      success: string;
      background: string;
      surface: string;
      textMain: string;
      textMuted: string;
      glass: {
        bg: string;
        border: string;
        blur: string;
      };
      [key: string]: any; // Allow dynamic access for now or define stricter union
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
      full: string;
    };
    shadows: {
      sm: string;
      md: string;
      lg: string;
    };
  }
}
