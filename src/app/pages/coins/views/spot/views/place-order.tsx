import * as MuiLab from "@mui/lab";
import * as ReactFire from "reactfire";

export const PlaceOrder = (props: MuiLab.LoadingButtonProps) => {
  const auth = ReactFire.useSigninCheck();
  return (
    <MuiLab.LoadingButton
      {...props}
      variant="contained"
      size="small"
      sx={{ marginTop: { md: "auto !important" }, mb: { md: 0 } }}
      disabled={!auth?.data?.signedIn}
    >
      {!auth?.data?.signedIn ? "please signin to trade" : "place an order"}
    </MuiLab.LoadingButton>
  );
};
