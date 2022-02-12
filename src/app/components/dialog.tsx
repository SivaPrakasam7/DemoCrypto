import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import * as Router from "react-router-dom";

export const Dialog = ({ children, ...props }: Partial<Mui.DialogProps>) => {
  const navigate = Router.useNavigate();
  const handleClose = () => navigate(-1);

  return (
    <Mui.Dialog open={true} {...props}>
      <Mui.Stack>
        <Mui.IconButton onClick={handleClose} sx={{ alignSelf: "flex-end" }}>
          <MuiIcons.Close />
        </Mui.IconButton>
      </Mui.Stack>
      {children}
    </Mui.Dialog>
  );
};
