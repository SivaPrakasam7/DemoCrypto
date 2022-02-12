import * as Mui from "@mui/material";

export const PaletteLight = (): Pick<Mui.ThemeOptions, "palette"> => ({
  palette: {
    mode: "light",
    primary: {
      main: Mui.colors.purple["A700"],
    },
  },
});

export const PaletteDark = (): Pick<Mui.ThemeOptions, "palette"> => ({
  palette: {
    mode: "dark",
    primary: {
      main: Mui.colors.purple["A700"],
    },
  },
});
