import styled from 'styled-components/native';
import { useTheme } from '../../context/themeContext/useTheme';

export const GreetingText = styled.Text`
  color: ${() => {
    const { theme } = useTheme();
    return theme.textColor;
  }};
  font-size: 18px;
  font-weight: 600;
`;

export const ButtonsContainer = styled.View`
  margin-top: 20px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 10px;
`;

export const CustomButton = styled.TouchableOpacity`
  width: 48%;
  height: 160px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;

  background-color: ${() => {
    const { theme } = useTheme();
    return theme.backgroundColor;
  }};
    shadow-color: ${() => {
    const { isDark } = useTheme();
    return isDark ? '#ffff' : 'gray';
  }};

  shadow-offset: 0px 1px;
  shadow-opacity: 0.2;
  shadow-radius: 3.84px;
  elevation: 5;
`;

export const ButtonText = styled.Text`
  color: ${() => {
    const { theme } = useTheme();
    return theme.textColor;
  }};
`;
