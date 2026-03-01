import React, { createContext, useState } from 'react';

import { Theme, ThemeContextType, VariantTheme } from './types';
import { themeVariants } from './variants';

export const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, updateTheme] = useState<Theme>(themeVariants.light);

  const setTheme = (theme: VariantTheme) => {
    const currentTheme = themeVariants[theme];
    updateTheme(currentTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
