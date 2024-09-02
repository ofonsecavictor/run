import React from 'react';
import { render } from '@testing-library/react-native';
import { Routes } from './routes';

jest.mock('../screens/LoginScreen', () => {
  const { Text } = require('react-native');
  return {
    LoginScreen: () => <Text>Login Screen</Text>,
  };
});

jest.mock('../screens/HomeScreen', () => {
  const { Text } = require('react-native');
  return {
    HomeScreen: () => <Text>Home Screen</Text>,
  };
});

describe('Routes', () => {
  it('renders the Login screen initially', () => {
    const { getByText } = render(<Routes />);
    expect(getByText('Login Screen')).toBeTruthy();
  });
});
