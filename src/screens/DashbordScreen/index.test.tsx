import React from 'react';
import { render } from '@testing-library/react-native';
import { DashboardScreen } from '.';
import { useTheme } from '../../context/themeContext/useTheme';

jest.mock('../../context/themeContext/useTheme', () => ({
    useTheme: jest.fn(),
}));

jest.mock('../../components/Global', () => ({
    MainScreenContainer: ({ children }: { children: React.ReactNode }) => <>{children}</>,
    Header: () => <></>,
    ContentContainer: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

describe('DashboardScreen', () => {
    it('deve renderizar corretamente com o tema claro', () => {
        (useTheme as jest.Mock).mockReturnValue({
            theme: {
                textColor: 'black',
            },
        });

        const { getByText } = render(<DashboardScreen />);

        const textElement = getByText('TELA DE DASHBOARD');
        expect(textElement.props.style).toEqual({ color: 'black' });
    });

    it('deve renderizar corretamente com o tema escuro', () => {
        (useTheme as jest.Mock).mockReturnValue({
            theme: {
                textColor: 'white',
            },
        });

        const { getByText } = render(<DashboardScreen />);

        const textElement = getByText('TELA DE DASHBOARD');
        expect(textElement.props.style).toEqual({ color: 'white' });
    });
});
