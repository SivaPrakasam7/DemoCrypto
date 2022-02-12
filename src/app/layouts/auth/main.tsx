import * as Mui from "@mui/material";
import * as Router from "react-router-dom";
import * as Components from "src/app/components";
import * as Assets from "src/assets";

export const Main = () => {
  const { pathname } = Router.useLocation();
  const registerRoute = Router.matchPath(
    {
      path: "/account/register",
      end: false,
    },
    pathname
  );
  return (
    <Mui.Grid container>
      <Mui.Grid
        item
        xs={12}
        md={6}
        sx={{ height: "100vh", position: "relative" }}
      >
        <Components.Logo />
        <Mui.CardMedia
          component="img"
          src={Assets.AuthBackground}
          sx={{ width: "100%", height: "100%" }}
        />
      </Mui.Grid>
      <Mui.Grid
        item
        xs={12}
        md={6}
        sx={{
          position: { xs: "absolute", md: "relative" },
          top: registerRoute ? 70 : 100,
          width: "100%",
          height: "fit-content",
        }}
      >
        <Mui.Container maxWidth="xs">
          <Mui.Card elevation={0}>
            <Mui.CardContent>
              <Router.Outlet />
            </Mui.CardContent>
          </Mui.Card>
        </Mui.Container>
      </Mui.Grid>
    </Mui.Grid>
  );
};
