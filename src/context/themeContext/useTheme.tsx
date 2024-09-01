import React, { createContext, useContext, ReactNode } from 'react';
import { useColorScheme } from 'react-native';
import { Theme as NavigationTheme } from '@react-navigation/native';
import { darkTheme, lightTheme } from '../../config/theme';

interface Theme {
  backgroundColor: string;
  headerBackgroundColor: string;
  textColor: string;
  placeholderColor: string;
  navigationTheme: NavigationTheme;
  borderColor: string;
}

interface ThemeContextProps {
  theme: Theme;
  isDark: boolean;
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: lightTheme,
  isDark: false,
});

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? darkTheme : lightTheme;
  const isDark = colorScheme === 'dark';

  return (
    <ThemeContext.Provider value={{ theme, isDark }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
