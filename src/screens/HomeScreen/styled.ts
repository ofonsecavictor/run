import styled from 'styled-components/native';
import {useTheme} from '../../context/themeContext/useTheme';
import {FlatList, ImageStyle, TouchableOpacity} from 'react-native';
import {Feedback} from '../../mocks/mocks';

interface ButtonProps {
  width: string;
  overflow: boolean;
  height: string;
}

interface TextProps {
  color: string;
  size?: string;
  self?: string;
  width?: string;
}

export const GreetingText = styled.Text`
  color: ${() => {
    const {theme} = useTheme();
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

export const Button = styled(TouchableOpacity)<ButtonProps>`
  width: ${({width}) => width};
  height: ${({height}) => height};

  border-radius: 10px;
  margin-bottom: 10px;
  overflow: ${({overflow}) => (overflow ? 'hidden' : 'visible')};
`;

export const ButtonText = styled.Text<TextProps>`
  color: ${({color}) => color};
  font-size: ${({size}) => size};
  font-weight: bold;
  text-align: left;
  align-self: ${({self}) => self};
  width: ${({width}) => width};
`;

export const ButtonImage: ImageStyle = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'flex-start',
  padding: 10,
};

export const FeedbackList = styled(FlatList<Feedback>)`
  margin-top: 20px;
  padding-horizontal: 20px;
`;

export const ListHeader = styled.View`
  margin-bottom: 15px;
`;

export const FeedbackTitle = styled.Text`
  color: ${() => {
    const {theme} = useTheme();
    return theme.textColor;
  }};
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Separator = styled.View`
  border-width: 0.4px;
  border-color: gray;
`;
