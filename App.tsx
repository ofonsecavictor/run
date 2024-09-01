import React from 'react';
import {
  StatusBar,
  useColorScheme,
} from 'react-native';
import { Routes } from './src/routes';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor="transparent"
        translucent
      />
      <Routes />
    </>
  );
}

export default App;
