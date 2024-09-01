/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { useColorScheme } from 'react-native';
import * as Screen from '../screens';

const Tab = createBottomTabNavigator();

export const MainTab: React.FC = () => {
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundColor = isDarkMode ? '#333' : '#FFF';

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: 'red',
                tabBarStyle: {
                    backgroundColor: backgroundColor,
                },
            }}>
            <Tab.Screen
                name={'Início'}
                component={Screen.HomeScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ size, color }) => (
                        <Icon
                            name="home-outline"
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name={'Atletas'}
                component={Screen.AthletesScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ size, color }) => (
                        <Icon
                            name="people-outline"
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name={'Dashboard'}
                component={Screen.DashboardScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ size, color }) => (
                        <Icon
                            name="pie-chart-outline"
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name={'Config'}
                component={Screen.ConfigScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ size, color }) => (
                        <Icon
                            name="settings-outline"
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};
