import React from "react";

export const themes = {
  light: {
    foreground: "#333333",
    background: "#BAE2FF",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};

export const MyThemeContext = React.createContext({ theme: themes.light });

export default function MyThemeProvider(props) {
  const [theme, setTheme] = React.useState(themes.light);

  const isDarkMode = theme.background === themes.dark.background; //name boolean with is as a question so you know its a true or false value
  return (
    <MyThemeContext.Provider value={{ theme, setTheme, isDarkMode }}>
      {props.children}
    </MyThemeContext.Provider>
  );
}
