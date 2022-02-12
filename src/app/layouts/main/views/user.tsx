import * as React from "react";
import * as ReactFire from "reactfire";
import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";

export const User = ({ user }: Pick<ReactFire.SigninCheckResult, "user">) => {
  const auth = ReactFire.useAuth();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleClick = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const handleLogout = async () => await auth.signOut();

  return (
    <React.Fragment>
      <Mui.Button
        startIcon={<MuiIcons.AccountBalanceWallet />}
        variant="contained"
        color="success"
        disableRipple
      >
        $10,000
      </Mui.Button>
      <Mui.IconButton
        size="small"
        disableRipple
        disableTouchRipple
        onClick={handleClick}
      >
        <Mui.Avatar src={user?.photoURL as string}>
          {user?.displayName?.[0]}
        </Mui.Avatar>
      </Mui.IconButton>
      <Mui.Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          sx: {
            filter: "drop-shadow(0 0 5px rgba(0,0,0,0.1))",
            bgcolor: "background.default",
            overflow: "visible",
            mt: 1.5,
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: -5,
              right: 15,
              width: 10,
              height: 10,
              zIndex: 0,
              bgcolor: "background.default",
              transform: "translate(-50%) rotate(45deg)",
            },
          },
        }}
      >
        <Mui.MenuItem>
          <Mui.ListItemIcon>
            <MuiIcons.Person />
          </Mui.ListItemIcon>
          {user?.displayName}
        </Mui.MenuItem>
        <Mui.MenuItem onClick={handleLogout}>
          <Mui.ListItemIcon>
            <MuiIcons.Logout color="error" />
          </Mui.ListItemIcon>
          <Mui.Typography variant="body2" color="error">
            Logout
          </Mui.Typography>
        </Mui.MenuItem>
      </Mui.Menu>
    </React.Fragment>
  );
};
