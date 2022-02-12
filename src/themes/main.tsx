import * as Mui from "@mui/material";
import * as React from "react";
import * as Themes from "src/themes";

export const ThemeContext = React.createContext({
  mode: true,
  changeMode: () => {},
});

export const Main = ({ children }: Child) => {
  const [mode, setMode] = React.useState(false);
  const changeMode = () => setMode(!mode);
  const theme = React.useMemo(
    () =>
      Mui.createTheme({
        ...Themes.Global.Components(),
        ...(mode ? Themes.Global.PaletteDark() : Themes.Global.PaletteLight()),
        ...Themes.Global.Typograhy(),
      }),
    [mode]
  );
  return (
    <ThemeContext.Provider value={{ mode, changeMode }}>
      <Themes.CssBaseline.Main />
      <Mui.ThemeProvider theme={theme}>{children}</Mui.ThemeProvider>
    </ThemeContext.Provider>
  );
};
