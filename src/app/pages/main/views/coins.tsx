import * as Mui from "@mui/material";
import * as React from "react";
import * as Router from "react-router-dom";
import * as Api from "src/api";
import * as Constants from "src/constants";

export const Coins = () => {
  const { products } = Api.useCoinSocket(["status"]);
  const [pair, setPair] = React.useState("USD");
  const handleUSD = () => setPair("USD");
  const handleUSDC = () => setPair("USDC");
  const handleUSDT = () => setPair("USDT");

  return (
    <Mui.Grid container spacing={2} sx={{ pb: 10 }}>
      <Mui.Grid item xs={12}>
        <Mui.Stack
          spacing={2}
          direction={{ xs: "column", sm: "row" }}
          alignItems="center"
          justifyContent="space-between"
        >
          <Mui.Typography variant="h5" color="primary">
            Coins List
          </Mui.Typography>
          <Mui.ButtonGroup>
            <Mui.Button onClick={handleUSD}>USD</Mui.Button>
            <Mui.Button onClick={handleUSDC}>USDC</Mui.Button>
            <Mui.Button onClick={handleUSDT}>USDT</Mui.Button>
          </Mui.ButtonGroup>
        </Mui.Stack>
      </Mui.Grid>
      {products ? (
        products
          .filter((coin) => coin?.id?.split("-")?.[1] === pair)
          .sort((a, b) => a.id.localeCompare(b.id))
          // .slice(0, 40)
          .map((coin, index) => (
            <Mui.Grid key={index} item xs={12} sm={6} md={3}>
              <Mui.Card>
                <Mui.CardActionArea
                  component={Router.Link}
                  to={`coins/${coin.id}`}
                >
                  <Mui.Stack
                    component={Mui.CardContent}
                    direction="row"
                    spacing={2}
                    alignItems="center"
                  >
                    <Mui.Avatar
                      src={`${Constants.CoinUrl.Logo}/${coin.base_currency}.png`}
                    >
                      {coin.base_currency[0]}
                    </Mui.Avatar>
                    <Mui.Stack>
                      <Mui.Typography variant="body1">
                        {coin.display_name}
                      </Mui.Typography>
                      <Mui.Typography variant="body2" color="text.secondary">
                        {coin.min_market_funds}-{coin.max_market_funds}{" "}
                        {coin.base_currency}
                      </Mui.Typography>
                    </Mui.Stack>
                  </Mui.Stack>
                </Mui.CardActionArea>
              </Mui.Card>
            </Mui.Grid>
          ))
      ) : (
        <Mui.Stack
          alignItems="center"
          justifyContent="center"
          sx={{ p: 2, width: "100%" }}
        >
          <Mui.CircularProgress />
        </Mui.Stack>
      )}
    </Mui.Grid>
  );
};
