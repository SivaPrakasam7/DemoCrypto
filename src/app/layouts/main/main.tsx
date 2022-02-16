import * as Mui from "@mui/material";
import * as Router from "react-router-dom";
import * as Layouts from "src/app/layouts";
import * as Components from "src/app/components";

export const Main = () => (
  <Mui.Box>
    <Mui.AppBar>
      <Mui.Stack direction="row" component={Mui.Toolbar} spacing={1}>
        <Components.Logo />
        <Mui.Box flexGrow={1} />
        <Layouts.Main.Views.AuthCheck />
      </Mui.Stack>
    </Mui.AppBar>
    <Mui.Container sx={{ pt: 10, overflow: "hidden" }}>
      <Router.Outlet />
    </Mui.Container>
  </Mui.Box>
);
