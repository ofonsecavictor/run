import React from 'react';
import { KeyboardAvoidingView, SafeAreaView } from 'react-native';
import { Container } from './styled';
import { Logo } from '../../components/Login/Logo';
import { InputFields } from '../../components/Login/Form';

export function LoginScreen(): React.JSX.Element {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#333' }} testID="safe-area-container">
      <KeyboardAvoidingView
        behavior={'height'}
        style={{ flex: 1 }}
      >
        <Container>
          <Logo isDarkMode={true} />
          <InputFields isDarkMode={true} contentBackgroundStyle={{ backgroundColor: '#FFF' }} />
        </Container>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
