import { useState, useMemo, useEffect } from "react";
import ThemeContext, { themes } from "./ThemeContext";

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.light);

  const handleChangeTheme = () => {
    if (theme === themes.dark) {
      setTheme(themes.light);
      localStorage.setItem("theme", JSON.stringify(themes.light));
    } else {
      setTheme(themes.dark);
      localStorage.setItem("theme", JSON.stringify(themes.dark));
    }
  };

  const providerValue = useMemo(
    () => ({ theme, handleChangeTheme }),
    [theme, handleChangeTheme]
  );

  useEffect(() => {
    const prevTheme = localStorage.getItem("theme");
    if (prevTheme) setTheme(JSON.parse(prevTheme));
  }, []);

  return (
    <ThemeContext.Provider value={providerValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
