import { useEffect, useState } from 'react';
import { getStravaTokenFromStorage } from '../services/Strava/StravaService';


export const useStravaAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const checkAuth = async () => {
    const token = await getStravaTokenFromStorage();
    setIsAuthenticated(!!token);
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return { isAuthenticated, checkAuth };
};
