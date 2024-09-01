import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { HomeScreen } from '.';

describe('HomeScreen', () => {
  it('should render the greeting text', () => {
    const { getByText } = render(<HomeScreen />);
    expect(getByText(/Olá, Victor/i)).toBeTruthy();
  });

  it('should render all buttons with correct titles', () => {
    const { getByText } = render(<HomeScreen />);
    expect(getByText('ITEM 1')).toBeTruthy();
    expect(getByText('ITEM 2')).toBeTruthy();
    expect(getByText('ITEM 3')).toBeTruthy();
    expect(getByText('ITEM 4')).toBeTruthy();
  });

  it('should call the correct action when a button is pressed', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

    const { getByText } = render(<HomeScreen />);

    fireEvent.press(getByText('ITEM 1'));
    expect(consoleSpy).toHaveBeenCalledWith('ITEM 1');

    fireEvent.press(getByText('ITEM 2'));
    expect(consoleSpy).toHaveBeenCalledWith('ITEM 2');

    fireEvent.press(getByText('ITEM 3'));
    expect(consoleSpy).toHaveBeenCalledWith('ITEM 3');

    fireEvent.press(getByText('ITEM 4'));
    expect(consoleSpy).toHaveBeenCalledWith('ITEM 4');

    consoleSpy.mockRestore();
  });
});
