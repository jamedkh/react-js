import { useState } from "react";
import { ThemeDataContext } from "./theme-data";

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeDataContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeDataContext.Provider>
  );
};

export default ThemeProvider;
