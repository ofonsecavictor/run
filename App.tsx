import React from 'react';
import {
  StatusBar,
  useColorScheme,
} from 'react-native';
import { Routes } from './src/routes';
import { ThemeProvider } from './src/context/useTheme';


function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <>
        <ThemeProvider>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor="transparent"
        translucent
      />
        <Routes />
      </ThemeProvider>
    </>
  );
}

export default App;
