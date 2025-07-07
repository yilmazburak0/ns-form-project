export interface Theme {
  colors: {
    stormBlue300: string;
    neutralGray50: string;
    neutralGray400: string;
    white: string;
    gray100: string;
    gray200: string;
    gray300: string;
    gray400: string;
    gray500: string;
    gray600: string;
    blue500: string;
    blue100: string;
  };
}

export interface ThemedProps {
  theme: Theme;
}

export interface ClientThemeProviderProps {
  children: React.ReactNode;
}