import * as ReactFire from "reactfire";
import * as Mui from "@mui/material";
import * as Router from "react-router-dom";
import * as Layouts from "src/app/layouts";

export const AuthCheck = () => {
  const auth = ReactFire.useSigninCheck();
  return auth?.data?.signedIn ? (
    <Layouts.Main.Views.User user={auth?.data?.user} />
  ) : (
    <AuthRoutes />
  );
};

export const AuthRoutes = () => (
  <Mui.Stack direction="row" spacing={1}>
    <Mui.Button variant="outlined" component={Router.Link} to="/account/login">
      Login
    </Mui.Button>
    <Mui.Button variant="outlined" component={Router.Link} to="/account/register">
      Join now
    </Mui.Button>
  </Mui.Stack>
);
