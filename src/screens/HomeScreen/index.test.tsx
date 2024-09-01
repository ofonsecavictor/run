import React from 'react';
import { render } from '@testing-library/react-native';
import { HomeScreen } from '.';


describe('HomeScreen', () => {
  it('should render the home screen text', () => {
    const { getByText } = render(<HomeScreen />);

    expect(getByText('HOME SCREEN')).toBeTruthy();
  });
});
