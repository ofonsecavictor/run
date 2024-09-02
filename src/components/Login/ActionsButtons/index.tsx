import React from 'react';
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../routes/routes';
import { Button, ButtonText, InputContainer } from '../../styled';

interface ActionButtonsProps {
  navigation: NavigationProp<RootStackParamList>;
  handleSubmit: () => void;
}

export function ActionButtons({ handleSubmit }: ActionButtonsProps) {
  return (
    <InputContainer>
      <Button backgroundColor="red" onPress={handleSubmit}>
        <ButtonText>Entrar</ButtonText>
      </Button>
      <Button backgroundColor="blue">
        <ButtonText>Entrar com Google</ButtonText>
      </Button>
      <Button backgroundColor="black">
        <ButtonText>Entrar com Apple</ButtonText>
      </Button>
    </InputContainer>
  );
}
