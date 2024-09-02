import React from 'react';
import { useTheme } from '../../../context/themeContext/useTheme';
import logo from '../../../assets/logo-header.png';
import Icon from 'react-native-vector-icons/Ionicons';
import * as S from './styled';
import { useModal } from '../../../context/modalContext';

export function Header() {
    const { theme } = useTheme();
  const {toggleModal, setKeyModal} = useModal();

  const handleOpenModal = (key: string) => {
    toggleModal({
      [key]: {
        isOpen: true,
      },
    });
    console.log('key');
    setKeyModal('notifications');
  };

    const hasNotification = true;

    return (
        <S.HeaderContainer theme={theme}>
            <S.HeaderContent>
                <S.LogoImage source={logo} />
                <S.NotificationButton onPress={() => handleOpenModal('generic')}>
                    {hasNotification ? (
                        <S.AnimatedIconView>
                            <S.NotificationIndicator />
                            <Icon
                                name="notifications"
                                size={24}
                                color="white"
                            />
                        </S.AnimatedIconView>
                    ) : (
                        <Icon
                            name="notifications-outline"
                            size={24}
                            color="white"
                        />
                    )}
                </S.NotificationButton>
            </S.HeaderContent>
        </S.HeaderContainer>
    );
}
