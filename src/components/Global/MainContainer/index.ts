import styled from 'styled-components/native';
import { useTheme } from '../../../context/themeContext/useTheme';


export const MainScreenContainer = styled.View`
  flex: 1;
  background-color: ${() => {
    const {theme} = useTheme();
    return theme.backgroundColor;
  }};
`;

export const ContentContainer = styled.View`
  flex: 1;
  padding: 15px;
  background-color: ${() => {
    const {theme} = useTheme();
    return theme.backgroundColor;
  }};
`;

