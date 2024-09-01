import React from 'react';
import { render } from '@testing-library/react-native';
import { ConfigScreen } from '../ConfigScreen';
import { useTheme } from '../../context/themeContext/useTheme';


jest.mock('../../context/themeContext/useTheme', () => ({
    useTheme: jest.fn(),
}));


jest.mock('../../components/Global', () => ({
    MainScreenContainer: ({ children }: { children: React.ReactNode }) => <>{children}</>,
    Header: () => <></>,
    ContentContainer: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

describe('ConfigScreen', () => {
    it('deve renderizar corretamente com o tema claro', () => {
        (useTheme as jest.Mock).mockReturnValue({
            theme: {
                textColor: 'black',
            },
        });

        const { getByText } = render(<ConfigScreen />);

        const textElement = getByText('TELA DE CONFIGURACOES');
        expect(textElement.props.style).toEqual({ color: 'black' });
    });

    it('deve renderizar corretamente com o tema escuro', () => {
        (useTheme as jest.Mock).mockReturnValue({
            theme: {
                textColor: 'white',
            },
        });

        const { getByText } = render(<ConfigScreen />);

        const textElement = getByText('TELA DE CONFIGURACOES');
        expect(textElement.props.style).toEqual({ color: 'white' });
    });
});
