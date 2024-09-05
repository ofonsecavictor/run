/* eslint-disable radix */
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const STRAVA_CLIENT_ID = '133986';
const STRAVA_CLIENT_SECRET = 'd3ac788e210ebd282179e929174168995bf1df43';
const STRAVA_TOKEN_URL = 'https://www.strava.com/oauth/token';

export const getStravaTokenFromStorage = async () => {
  try {
    const token = await AsyncStorage.getItem('strava_access_token');
    return token;
  } catch (error) {
    console.error('Erro ao recuperar token do AsyncStorage:', error);
    return null;
  }
};

export const getToken = async (authCode: string) => {
  try {
    const response = await axios.post(STRAVA_TOKEN_URL, {
      client_id: STRAVA_CLIENT_ID,
      client_secret: STRAVA_CLIENT_SECRET,
      code: authCode,
      grant_type: 'authorization_code',
    });

    const {access_token, refresh_token, expires_at} = response.data;

    await AsyncStorage.multiSet([
      ['strava_access_token', access_token],
      ['strava_refresh_token', refresh_token],
      ['strava_token_expires_at', expires_at.toString()],
    ]);
  } catch (error) {
    console.error('Erro ao obter token do Strava:', error);
  }
};

export const refreshToken = async () => {
  try {
    const refresh_token = await AsyncStorage.getItem('strava_refresh_token');
    const response = await axios.post(STRAVA_TOKEN_URL, {
      client_id: STRAVA_CLIENT_ID,
      client_secret: STRAVA_CLIENT_SECRET,
      grant_type: 'refresh_token',
      refresh_token: refresh_token,
    });

    const {
      access_token,
      refresh_token: new_refresh_token,
      expires_at,
    } = response.data;

    await AsyncStorage.multiSet([
      ['strava_access_token', access_token],
      ['strava_refresh_token', new_refresh_token],
      ['strava_token_expires_at', expires_at.toString()],
    ]);

    return access_token;
  } catch (error) {
    console.error('Erro ao atualizar token do Strava:', error);
    return null;
  }
};

export const checkTokenExpiration = async () => {
  const expires_at = await AsyncStorage.getItem('strava_token_expires_at');
  if (expires_at && parseInt(expires_at) * 1000 < Date.now()) {
    return await refreshToken();
  }
  return await AsyncStorage.getItem('strava_access_token');
};

export const getStravaActivities = async () => {
  const token = await checkTokenExpiration();
  if (!token) {
    console.error('Token do Strava não encontrado.');
    return null;
  }

  try {
    const response = await axios.get(
      'https://www.strava.com/api/v3/athlete/activities',
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return response.data;
  } catch (error: any) {
    console.error('Erro ao buscar atividades no Strava:', error);
    if (error.response) {
      console.log('Detalhes do erro:', error.response.data);
    }
    return null;
  }
};
