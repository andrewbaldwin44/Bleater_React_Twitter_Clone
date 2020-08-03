import React, { createContext, useState } from 'react';
import useFetch from '../hooks/useFetch.hook';

export const CurrentUserContext = createContext(null);

export function CurrentUserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [status, setStatus] = useState("loading");

  useFetch('/api/me/profile', data => {
    setCurrentUser(data.profile);
    setStatus('idle');
  });

  return (
    <CurrentUserContext.Provider value={{ currentUser, status }}>
      {children}
    </CurrentUserContext.Provider>
  );
};
