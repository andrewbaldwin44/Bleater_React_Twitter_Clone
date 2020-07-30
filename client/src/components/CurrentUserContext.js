import React, { createContext, useEffect } from 'react';

export const CurrentUserContext = createContext(null);

export function CurrentUserProvider({ children }) {
  const [currentUser, setCurrentUser] = React.useState(null);
  const [status, setStatus] = React.useState("loading");

  useEffect(() => {
    fetch('/api/me/profile')
        .then(response => response.json())
        .then(data => {
          setCurrentUser(data.profile);
          setStatus('idle');
        });
  }, []);


  return (
    <CurrentUserContext.Provider value={{ currentUser, status }}>
      {children}
    </CurrentUserContext.Provider>
  );
};
