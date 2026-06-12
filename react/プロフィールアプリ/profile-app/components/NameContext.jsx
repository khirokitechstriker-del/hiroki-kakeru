"use client";

import { createContext, useContext, useState } from "react";

const NameContext = createContext(null);

export function NameBox({ children }) {
  const [sharedName, setSharedName] = useState("");

  return (
    <NameContext.Provider value={{ sharedName, setSharedName }}>
      {children}
    </NameContext.Provider>
  );
}

export function useName() {
  return useContext(NameContext);
}