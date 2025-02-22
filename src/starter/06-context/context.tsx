import React, { createContext, useContext, useState } from "react";

const ThemeProviderContext = createContext<string | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProviderContext.Provider value="hello">
      {children}
    </ThemeProviderContext.Provider>
  );
}
