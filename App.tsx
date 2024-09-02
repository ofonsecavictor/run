import React from 'react';
import {
  StatusBar,
  useColorScheme,
} from 'react-native';
import { Routes } from './src/routes/routes';
import { ThemeProvider } from './src/context/themeContext/useTheme';
import { ModalProvider} from './src/context/modalContext';


function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <>
      <ThemeProvider>
        <ModalProvider>
          <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor="transparent"
            translucent
          />
          <Routes />
        </ModalProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
