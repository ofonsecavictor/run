import React from 'react';
import { useTheme } from '../../../context/themeContext/useTheme';
import logo from '../../../assets/logo-header.png';
import * as S from './styled';
import { useModal } from '../../../context/modalContext';
import { NotificationIcon } from '../../../assets/icons/notifications';
import { NotificationIconOutlined } from '../../../assets/icons/notifications-outline';




export function Header() {
    const { theme } = useTheme();
    const { toggleModal, setKeyModal } = useModal();

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
                            <NotificationIcon
                                fill="white"
                                width={22}
                                height={22}
                            />
                        </S.AnimatedIconView>
                    ) : (
                        <NotificationIconOutlined
                            stroke="white"
                            width={24}
                            height={24}
                        />
                    )}
                </S.NotificationButton>
            </S.HeaderContent>
        </S.HeaderContainer>
    );
}
