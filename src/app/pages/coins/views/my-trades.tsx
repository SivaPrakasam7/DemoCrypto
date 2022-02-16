import * as Mui from "@mui/material";
import * as Pages from "src/app/pages";

export const MyTrades = () => {
  const { status, trades } = Pages.Coins.Hooks.useMyOrders();
  return (
    <Mui.Card sx={{ maxHeigth: 450, height: "100%" }}>
      <Mui.CardContent>
        <Mui.Typography variant="h6" color="primary.main">
          My Trades
        </Mui.Typography>
        <Mui.Stack
          alignItems="center"
          justifyContent="center"
          sx={{
            height: "100%",
            p: 3,
            borderRadius: 2,
            bgcolor: Mui.colors.grey[100],
          }}
        >
          <Mui.Typography variant="h6" color="text.secondary">
            No Trades Available
          </Mui.Typography>
        </Mui.Stack>
      </Mui.CardContent>
    </Mui.Card>
  );
};
