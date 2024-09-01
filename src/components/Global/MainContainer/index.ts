import styled from 'styled-components/native';
import { useTheme } from '../../../context/useTheme';


export const MainScreenContainer = styled.View`
  flex: 1;
  background-color: ${() => {
    const theme = useTheme();
    return theme.backgroundColor;
  }};
`;
