import React from 'react';
import { Text } from 'react-native';
import * as Global from '../../components/Global';
import { useTheme } from '../../context/useTheme';

export function DashboardScreen() {
    const theme = useTheme();
    return (
        <Global.MainScreenContainer>
            <Global.Header />
            <Text style={{ color: theme.textColor }}>TELA DE DASHBOARD</Text>
        </Global.MainScreenContainer>
    );
}
