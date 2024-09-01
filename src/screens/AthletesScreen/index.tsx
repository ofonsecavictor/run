import React from 'react';
import { Text } from 'react-native';
import * as Global from '../../components/Global';
import { useTheme } from '../../context/themeContext/useTheme';

export function AthletesScreen() {
    const { theme } = useTheme();

    return (
        <Global.MainScreenContainer>
            <Global.Header />
            <Global.ContentContainer>
                <Text style={{ color: theme.textColor }}>TELA DE ATLETAS</Text>
            </Global.ContentContainer>
        </Global.MainScreenContainer>
    );
}
