import * as Mui from "@mui/material";
import * as Router from "react-router-dom";
import * as Components from "src/app/components";

export const Content = () => (
  <Mui.Stack spacing={2}>
    <Mui.Typography variant="h6" color="primary">
      Login
    </Mui.Typography>
    <Mui.Typography variant="body2" color="text.secondary">
      Please login to practice trade demo
    </Mui.Typography>
    <Components.Fields.FormField
      type="text"
      label="Email"
      placeholder="Joe@mail.com"
      name="email"
    />
    <Components.Fields.FormField
      type="password"
      label="Password"
      placeholder="Min of 8 Chatracter"
      name="password"
    />
    <Mui.Link
      component={Router.Link}
      to="/account/forgot-password"
      alignSelf="flex-end"
    >
      Forget password?
    </Mui.Link>
    <Components.SubmitButton>Login</Components.SubmitButton>
    <Mui.Typography variant="body1" textAlign="center">
      I don't have an account,{" "}
      <Mui.Link
        component={Router.Link}
        to="/account/register"
        alignSelf="flex-end"
      >
        Register
      </Mui.Link>
    </Mui.Typography>
    <Router.Outlet />
  </Mui.Stack>
);
