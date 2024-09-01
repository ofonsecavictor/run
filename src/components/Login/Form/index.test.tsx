import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { InputFields } from '.';
import { useNavigation } from '@react-navigation/native';

jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
}));

describe('InputFields', () => {
  const mockNavigate = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (useNavigation as jest.Mock).mockReturnValue({ navigate: mockNavigate });
  });

  it('should render input fields and submit button', () => {
    const { getByPlaceholderText, getByText } = render(
      <InputFields isDarkMode={false} contentBackgroundStyle={{ backgroundColor: '#FFF' }} />
    );

    expect(getByPlaceholderText('email')).toBeTruthy();
    expect(getByPlaceholderText('senha')).toBeTruthy();
    expect(getByText('Entrar')).toBeTruthy();
  });

  it('should show validation errors if form is submitted with empty fields', async () => {
    const { getByText } = render(
      <InputFields isDarkMode={false} contentBackgroundStyle={{ backgroundColor: '#FFF' }} />
    );

    const submitButton = getByText('Entrar');

    fireEvent.press(submitButton);

    await waitFor(() => {
      expect(getByText('Email é obrigatório')).toBeTruthy();
      expect(getByText('Senha é obrigatória')).toBeTruthy();
    });
  });

  it('should navigate to Home screen on successful submission', async () => {
    const { getByPlaceholderText, getByText } = render(
      <InputFields isDarkMode={false} contentBackgroundStyle={{ backgroundColor: '#FFF' }} />
    );

    const emailInput = getByPlaceholderText('email');
    const passwordInput = getByPlaceholderText('senha');
    const submitButton = getByText('Entrar');

    fireEvent.changeText(emailInput, 'test@example.com');
    fireEvent.changeText(passwordInput, 'password123');

    fireEvent.press(submitButton);

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith('Home');
    });
  });
});
