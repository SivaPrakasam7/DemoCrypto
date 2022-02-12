import * as Mui from "@mui/material";
import * as Router from "react-router-dom";
import * as Components from "src/app/components";

export const Content = () => (
  <Mui.Stack spacing={2}>
    <Mui.Typography variant="h6" color="primary">
      Forget password
    </Mui.Typography>
    <Mui.Typography variant="body2" color="text.secondary">
      Please enter your email to get password reset link
    </Mui.Typography>
    <Components.Fields.FormField
      type="text"
      label="Email"
      placeholder="Joe@mail.com"
      name="email"
    />
    <Components.SubmitButton>Get Link</Components.SubmitButton>
    <Router.Outlet />
  </Mui.Stack>
);
