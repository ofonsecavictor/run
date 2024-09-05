import React, { useEffect } from 'react';
import { Button, Text } from 'react-native';
import * as Global from '../../components/Global';
import { useTheme } from '../../context/themeContext/useTheme';
import { useModal } from '../../context/modalContext';
import { useStravaAuth } from '../../hooks/useStravaToken';

export function ConfigScreen() {
  const { theme } = useTheme();
  const { setKeyModal, toggleModal } = useModal();
  const { isAuthenticated, checkAuth } = useStravaAuth();

  const handleOpenModal = (key: string, keyContent: string) => {
    toggleModal({
      [key]: {
        isOpen: true,
      },
    });
    setKeyModal(keyContent);
  };

  useEffect(() => {
    const checkIfAuthenticated = async () => {
      await checkAuth();
    };

    checkIfAuthenticated();
  }, [isAuthenticated, checkAuth]);

  return (
    <Global.MainScreenContainer>
      <Global.Header />
      <Global.ContentContainer>
        <Text style={{ color: theme.textColor }}>TELA DE CONFIGURAÇÕES</Text>

        {!isAuthenticated ? (
          <Button title="Conectar ao Strava" onPress={() => handleOpenModal('generic', 'stravaAuth')} />
        ) : (
          <Button title="Ver atividades no Strava" onPress={() => handleOpenModal('generic', 'straveActivities')} />
        )}
      </Global.ContentContainer>
    </Global.MainScreenContainer>
  );
}
