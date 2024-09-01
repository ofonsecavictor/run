import React from 'react';
import { useColorScheme, KeyboardAvoidingView, SafeAreaView } from 'react-native';
import { Container } from './styled';
import { Logo } from '../../components/Login/Logo';
import { InputFields } from '../../components/Login/Form';

export function LoginScreen(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#333' : '#FFF',
  };

  const contentBackgroundStyle = {
    backgroundColor: isDarkMode ? '#FFF' : '#333',
  };


  return (
    <SafeAreaView style={[backgroundStyle, { flex: 1 }]} testID="safe-area-container">
      <KeyboardAvoidingView
        behavior={'height'}
        style={{ flex: 1 }}
      >
        <Container>
          <Logo isDarkMode={isDarkMode} />
          <InputFields isDarkMode={isDarkMode} contentBackgroundStyle={contentBackgroundStyle} />
        </Container>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
