import * as Mui from "@mui/material";

export const Components = (): Pick<Mui.ThemeOptions, "components"> => ({
  components: {
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          background: "#fff",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 10,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
          borderRadius: 10,
        },
      },
    },
    MuiSlider: {
      styleOverrides: {
        root: {
          marginBottom: "20px !important",
        },
      },
    },
  },
});
