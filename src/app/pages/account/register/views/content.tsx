import * as Mui from "@mui/material";
import * as Router from "react-router-dom";
import * as Components from "src/app/components";

export const Content = () => (
  <Mui.Stack spacing={2}>
    <Mui.Typography variant="h6" color="primary">
      Register
    </Mui.Typography>
    <Mui.Typography variant="body2" color="text.secondary">
      Please enter your details to join our community
    </Mui.Typography>
    <Components.Fields.FormField
      type="text"
      label="First Name"
      placeholder="Jay"
      name="firstName"
    />
    <Components.Fields.FormField
      type="text"
      label="Last Name"
      placeholder="Garic"
      name="lastName"
    />
    <Components.Fields.FormField
      type="text"
      label="Email"
      placeholder="Joe@mail.com"
      name="email"
    />
    <Components.Fields.FormField
      type="text"
      label="Password"
      placeholder="Min of 8 Chatracter"
      name="password"
    />
    <Components.SubmitButton>create new user</Components.SubmitButton>
    <Mui.Typography variant="body1" textAlign="center">
      I already have an account,{" "}
      <Mui.Link
        component={Router.Link}
        to="/account/login"
        alignSelf="flex-end"
      >
        login
      </Mui.Link>
    </Mui.Typography>
    <Router.Outlet />
  </Mui.Stack>
);
