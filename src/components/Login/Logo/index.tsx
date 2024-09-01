import React from 'react';
import logo from '../../../assets/logo-dark.png';
import logoLight from '../../../assets/logo-light.png';
import { LogoImage } from '../../styled';

interface LogoProps {
  isDarkMode: boolean;
}

export function Logo({ isDarkMode }: LogoProps) {
  return <LogoImage source={isDarkMode ? logo : logoLight} />;
}
