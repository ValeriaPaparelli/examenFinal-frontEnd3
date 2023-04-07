import { createContext } from "react";

export const themes = {
  light: {
    fontColor: "black",
    backgroundColor: "white",
    backgroundColorSecondary: "#eaf2ef",
  },
  dark: {
    fontColor: "white",
    backgroundColor: "grey",
    backgroundColorSecondary: "#414141",
    backgroundColorTertiary: "#414141",
  },
};

const ThemeContext = createContext(themes.light);

export default ThemeContext;
