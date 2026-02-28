import React, { createContext, useState, useContext } from 'react';

import { ligthColor, darkColor } from '../theme/colors';
import { Theme } from '../types/types';

type ThemeContextType = {
  theme: Theme;
  colors: typeof ligthColor;
  toggleTheme: () => void;
};
const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>('ligth');
  const toggleTheme = () => {
    setTheme((prev) => (prev === 'ligth' ? 'dark' : 'ligth'));
  };
  const colors = theme === 'ligth' ? ligthColor : darkColor;
  return (
    <ThemeContext.Provider value={{ theme, colors, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used inside ThemeProvider');
  }
  return context;
};
