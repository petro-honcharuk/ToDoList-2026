export type VariantTheme = 'light' | 'dark';

export type Colors = {
  background: string;
  text: string;
  buttonText: string;
  borderColor: string;
  borderColorButton: string;
  primary: string;
};

export type Fonts = {
  regular: string;
  bold: string;
};

export type Theme = {
  variant: VariantTheme;
  colors: Colors;
  fonts: Fonts;
};

export type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: VariantTheme) => void;
};
