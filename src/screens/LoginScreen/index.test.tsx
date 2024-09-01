import React from 'react';
import { render } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import { LoginScreen } from '../../screens/LoginScreen';
import { useColorScheme } from 'react-native';

jest.mock('react-native/Libraries/Utilities/useColorScheme');

describe('LoginScreen', () => {
  it('should render correctly in dark mode', () => {
    (useColorScheme as jest.Mock).mockReturnValue('dark');

    const { getByPlaceholderText, getByText } = render(
      <NavigationContainer>
        <LoginScreen />
      </NavigationContainer>
    );

    expect(getByPlaceholderText('email')).toBeTruthy();
    expect(getByPlaceholderText('senha')).toBeTruthy();
    expect(getByText('Entrar')).toBeTruthy();
  });

  it('should render correctly in light mode', () => {
    (useColorScheme as jest.Mock).mockReturnValue('light');

    const { getByPlaceholderText, getByText } = render(
      <NavigationContainer>
        <LoginScreen />
      </NavigationContainer>
    );

    expect(getByPlaceholderText('email')).toBeTruthy();
    expect(getByPlaceholderText('senha')).toBeTruthy();
    expect(getByText('Entrar')).toBeTruthy();
  });

  it('should have the correct background color in dark mode', () => {
    (useColorScheme as jest.Mock).mockReturnValue('dark');

    const { getByTestId } = render(
      <NavigationContainer>
        <LoginScreen />
      </NavigationContainer>
    );

    const container = getByTestId('safe-area-container');
    expect(container.props.style[0].backgroundColor).toBe('#333');
  });

  it('should have the correct background color in light mode', () => {
    (useColorScheme as jest.Mock).mockReturnValue('light');

    const { getByTestId } = render(
      <NavigationContainer>
        <LoginScreen />
      </NavigationContainer>
    );

    const container = getByTestId('safe-area-container');
    expect(container.props.style[0].backgroundColor).toBe('#FFF');
  });
});
