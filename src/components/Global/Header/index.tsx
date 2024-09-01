import React from 'react';
import { Text, useColorScheme, View } from 'react-native';

export function Header() {
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundColor = isDarkMode ? '#cd0101' : 'red';

    return (
        <View style={{ backgroundColor: backgroundColor, height: '15%', justifyContent: 'flex-end', paddingBottom: 10 }}>
            <Text style={{ color: 'white' }}>Header</Text>
        </View>
    );
}
