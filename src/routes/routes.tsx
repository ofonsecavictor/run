import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from '../screens/LoginScreen';
import { MainTab } from './TabNavigator';
import BootSplash from 'react-native-bootsplash';

const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  LoginScreen: undefined;
  MainTab: undefined
  Home: undefined;
};

export function Routes(): React.JSX.Element {

  return (
    <NavigationContainer onReady={() => BootSplash.hide({fade: true})}>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }} >
          <Stack.Screen name="MainTab" component={MainTab} />
          <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

