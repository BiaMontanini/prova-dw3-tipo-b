import React, { createContext, useState, ReactNode } from 'react';
import { PageProps, UserContextState } from '../types';
import user from '../services/User';

const initialContextState: UserContextState = {
  users: null,
  error: null,
  inputError: null,
  getUsers: async () => {},
  setError: () => {},
  setInputError: () => {},
};

export const UserContext = createContext<UserContextState>(initialContextState);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [users, setUsers] = useState<PageProps | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [inputError, setInputError] = useState<string | null>(null);

  const getUsers = async (page: number, fromdate: number, todate: number) => {
    try {
      if (!page || isNaN(page)) {
        setInputError("Forneça o número da página");
        return;
      }
      if (!fromdate || isNaN(fromdate)) {
        setInputError("Forneça a data inicial no formato AAAA-MM-DD");
        return;
      }
      if (!todate || isNaN(todate)) {
        setInputError("Forneça a data final no formato AAAA-MM-DD");
        return;
      }
      
      const data = await user.getUsersByPage(page, fromdate, todate);
      if ('message' in data) {
        setError(data.message);
      } else {
        setUsers(data);
        setError(null);
      }
      setInputError(null);
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <UserContext.Provider value={{ users, error, inputError, getUsers, setError, setInputError }}>
      {children}
    </UserContext.Provider>
  );
};
