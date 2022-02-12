import * as Mui from "@mui/material";
import * as Components from "src/app/components";

export const Content = () => (
  <Mui.Stack spacing={2}>
    <Mui.Typography variant="h6" color="primary">
      Reset Password
    </Mui.Typography>
    <Mui.Typography variant="body2" color="text.secondary">
      Please make sure strong password
    </Mui.Typography>
    <Components.Fields.FormField
      type="text"
      label="Password"
      placeholder="Min of 8 Chatracter"
      name="password"
    />
    <Components.Fields.FormField
      type="text"
      label="Confirm Password"
      placeholder="Min of 8 Chatracter"
      name="confirmPassword"
    />
    <Components.SubmitButton>reset passsword</Components.SubmitButton>
  </Mui.Stack>
);
