import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { UserContextState } from '../types';

export const useUserContext = (): UserContextState => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
};
