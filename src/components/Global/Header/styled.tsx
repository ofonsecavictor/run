import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';
import { TouchableOpacity } from 'react-native';

export const HeaderContainer = styled.View<{ theme: any }>`
  background-color: ${({ theme }) => theme.headerBackgroundColor};
  height: 15%;
  justify-content: flex-end;
  padding-bottom: 10px;
  margin-bottom: 10px;
  padding-horizontal: 15px;
`;

export const HeaderContent = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const LogoImage = styled.Image`
  width: 130px;
  height: 50px;
  margin-left: -20px;
`;

export const NotificationButton = styled(TouchableOpacity)`
  position: relative;
`;

export const AnimatedIconView = styled(Animatable.View).attrs({
    animation: {
        0: { translateX: 0 },
        0.25: { translateX: -4 },
        0.5: { translateX: 4 },
        0.75: { translateX: -4 },
        1: { translateX: 0 },
    },
    iterationCount: 'infinite',
    duration: 1800,
})``;

export const NotificationIndicator = styled.View`
  position: absolute;
  right: 0;
  top: -6px;
  background-color: green;
  width: 12px;
  height: 12px;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
`;
