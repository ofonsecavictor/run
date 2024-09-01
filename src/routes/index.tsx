import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from '../screens/LoginScreen';
import { MainTab } from './TabNavigator';
import { useTheme } from '../context/useTheme';

const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  LoginScreen: undefined;
  Home: undefined;
};

export function Routes(): React.JSX.Element {
  const {navigationTheme} = useTheme();
  return (
    <NavigationContainer theme={navigationTheme}>
      <Stack.Navigator initialRouteName="MainTab" screenOptions={{ headerShown: false }} >
        <Stack.Screen name="MainTab" component={MainTab} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

