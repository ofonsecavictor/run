import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme } from '../../../context/themeContext/useTheme';

export const FeedbackItem = styled.TouchableOpacity`
  flex-direction: row;
  gap: 10px;
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 15px;
`;

export const FeedbackName = styled.Text`
  font-weight: bold;
  color: ${() => {
    const { theme } = useTheme();
    return theme.textColor;
  }};
  font-size: 14px;
`;

export const FeedbackDescription = styled.Text`
  font-size: 14px;
  max-width: 95%;
  color: ${() => {
    const { theme } = useTheme();
    return theme.textColor;
  }};
`;

export const FeedbackImage = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 50px;
`;

export const FeedbackTextContainer = styled.View`
  gap: 5px;
`;

export const FeedbackIcon = styled(Icon) <{ isDark: boolean }>`
  position: absolute;
  right: 5px;
  top: 40px;
  color: ${({ isDark }) => (isDark ? 'white' : 'black')};
  font-size: 18px;
`;
