import React, { createContext } from 'react';
import useFetch from '../hooks/useFetch.hook';

export const CurrentUserContext = createContext(null);

export function CurrentUserProvider({ children }) {
  const [currentUser, setCurrentUser] = React.useState(null);
  const [status, setStatus] = React.useState("loading");

  useFetch('/api/me/profile', data => {
    console.log(data)
    setCurrentUser(data.profile);
    setStatus('idle');
  });


  return (
    <CurrentUserContext.Provider value={{ currentUser, status }}>
      {children}
    </CurrentUserContext.Provider>
  );
};
