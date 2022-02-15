import * as Mui from "@mui/material";
import * as Components from "src/app/components";

export const AuthDialog = ({ icon, title, message }: authDialog.Props) => (
  <Components.Dialog>
    <Mui.Stack component={Mui.DialogContent} spacing={2} alignItems="center">
      {icon && (
        <Mui.CardMedia
          component="img"
          src={icon}
          sx={{ height: 70, width: 70 }}
        />
      )}
      <Mui.Typography variant="h6" color="primary">
        {title}
      </Mui.Typography>
      <Mui.Typography
        variant="body1"
        color="text.secondary"
        sx={{ p: 2, bgcolor: (theme) => theme.palette.grey[100] }}
      >
        {message}
      </Mui.Typography>
    </Mui.Stack>
    {/* <Mui.DialogActions>
      <Mui.Button variant="outlined">next</Mui.Button>
    </Mui.DialogActions> */}
  </Components.Dialog>
);

export declare namespace authDialog {
  export interface Props {
    icon?: string;
    title: string;
    message: string;
  }
}
