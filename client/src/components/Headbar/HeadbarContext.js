import React, { createContext, useState }  from "react";

export const HeadbarContext = createContext(null);

export function HeadbarProvider({ children }) {
  const [header, setHeader] = useState('Home');

  return (
    <HeadbarContext.Provider value={{ header, setHeader }}>
      {children}
    </HeadbarContext.Provider>
  )
}
