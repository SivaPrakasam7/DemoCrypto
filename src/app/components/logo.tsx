import * as Mui from "@mui/material";
import * as Router from "react-router-dom";

export const Logo = () => (
  <Mui.Typography
    variant="h5"
    color="primary"
    component={Router.Link}
    to="/"
    sx={{ position: "fixed", top: 10, left: 10, textDecoration: "none" }}
  >
    Demo Crypto
  </Mui.Typography>
);
