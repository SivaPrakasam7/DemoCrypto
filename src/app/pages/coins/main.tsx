import * as Mui from "@mui/material";
import * as Api from "src/api";
import * as Pages from "src/app/pages";

export const Main = () => {
  const { coins, match } = Api.useCoinSocket(["ticker", "matches"]);

  return (
    <Mui.Box
      sx={{
        bgcolor: (theme) => theme.palette.grey[100],
        minHeight: "100%",
        minWidth: "100%",
        p: 1,
        borderRadius: 2,
      }}
    >
      {coins && match ? (
        <Mui.Grid container spacing={2}>
          <Mui.Grid item xs={12} md={8.5} container spacing={2}>
            <Mui.Grid item xs={12}>
              <Pages.Coins.Views.CoinInfo coin={coins} />
            </Mui.Grid>
            <Mui.Grid item xs={12}>
              <Pages.Coins.Views.CoinChart />
            </Mui.Grid>
          </Mui.Grid>
          <Mui.Grid item xs={12} sm={6} md={3.5}>
            <Pages.Coins.Views.Spot.Main
              product_id={coins.product_id}
              price={coins.price}
            />
          </Mui.Grid>
          <Mui.Grid item xs={12} sm={6} md={3.5}>
            <Pages.Coins.Views.RecentTrade
              id={coins.product_id}
              match={match}
            />
          </Mui.Grid>
          <Mui.Grid item xs={12} md={8.5}>
            <Pages.Coins.Views.MyTrades />
          </Mui.Grid>
        </Mui.Grid>
      ) : (
        <Mui.Stack
          alignItems="center"
          justifyContent="center"
          sx={{ p: 2, width: "100%" }}
        >
          <Mui.CircularProgress />
        </Mui.Stack>
      )}
    </Mui.Box>
  );
};
