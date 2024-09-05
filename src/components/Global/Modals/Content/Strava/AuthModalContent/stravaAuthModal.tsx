import React from 'react';
import { WebView } from 'react-native-webview';
import { getToken } from '../../../../../../services/Strava/StravaService';

export const StravaAuthModal = ({
}) => {
    const authUrl = 'https://www.strava.com/oauth/authorize?client_id=133986&redirect_uri=https://ttrainingapp.com&response_type=code&approval_prompt=force&scope=read,activity:read_all,activity:write';

    const handleNavigationChange = async (navState: any) => {
        const { url } = navState;
        if (url.includes('&code=')) {
            const code = url.split('&code=')[1].split('&')[0];
            await getToken(code);
        }
    };

    return (
        <WebView
            source={{ uri: authUrl }}
            onNavigationStateChange={handleNavigationChange}
            userAgent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3"
        />
    );
};
