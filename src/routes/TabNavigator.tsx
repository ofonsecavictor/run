/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useColorScheme } from 'react-native';
import * as Screen from '../screens';
import { HomeIcon } from '../assets/icons/home';
import { ChartIcon } from '../assets/icons/chart';
import { PeopleIcon } from '../assets/icons/group';
import { SettingsIcon } from '../assets/icons/config';

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
                        <HomeIcon
                            width={size}
                            height={size}
                            fill={color}
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
                        <PeopleIcon
                            width={size}
                            height={size}
                            fill={color}

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
                        <ChartIcon
                            width={size}
                            height={size}
                            fill={color}

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
                        <SettingsIcon
                            width={size}
                            height={size}
                            fill={color}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};
