import { createContext, useState } from "react";

const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(true);

  return (
    <ThemeContext.Provider value={{theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const ThemeType = ThemeContext;
export default ThemeContextProvider;