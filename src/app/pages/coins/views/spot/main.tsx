import * as Mui from "@mui/material";
import * as React from "react";
import * as Pages from "src/app/pages";

export const Main = ({
  product_id,
  price,
}: {
  product_id: string;
  price: number;
}) => {
  const [trade, setTrade] = React.useState<"market" | "limit" | "stoplimit">(
    "market"
  );
  const handleMarket = () => setTrade("market");
  const handleLimit = () => setTrade("limit");
  const handleStopLimit = () => setTrade("stoplimit");

  return (
    <Mui.Card sx={{ height: "100%" }}>
      <Mui.CardContent
        component={Mui.Stack}
        spacing={2}
        sx={{ height: "100%" }}
      >
        <Mui.Typography variant="h6" color="primary.main">
          Spot
        </Mui.Typography>
        <Mui.CardContent
          component={Mui.Stack}
          spacing={2}
          sx={{
            bgcolor: (theme) => `${theme.palette.error.main}20`,
            borderRadius: 1,
          }}
        >
          <Mui.Stack
            spacing={2}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Mui.Typography variant="body2" color="text.secondary">
              Balance
            </Mui.Typography>
            <Mui.Typography variant="body2">873748.99</Mui.Typography>
          </Mui.Stack>
          <Mui.Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
          >
            <Mui.Typography variant="body2" color="text.secondary">
              Coin Balance
            </Mui.Typography>
            <Mui.Typography variant="body2">873748.99</Mui.Typography>
          </Mui.Stack>
        </Mui.CardContent>
        <Mui.Stack direction="row" justifyContent="space-between">
          <Mui.Button
            variant={trade === "market" ? "contained" : "outlined"}
            size="small"
            onClick={handleMarket}
          >
            Market
          </Mui.Button>
          <Mui.Button
            variant={trade === "limit" ? "contained" : "outlined"}
            size="small"
            onClick={handleLimit}
          >
            Limit
          </Mui.Button>
          <Mui.Button
            variant={trade === "stoplimit" ? "contained" : "outlined"}
            size="small"
            onClick={handleStopLimit}
          >
            Stop Limit
          </Mui.Button>
        </Mui.Stack>
        {
          {
            market: (
              <Pages.Coins.Views.Spot.Orders.MarketOrder
                product_id={product_id}
                marketPrice={price}
              />
            ),
            limit: (
              <Pages.Coins.Views.Spot.Orders.LimitOrder
                product_id={product_id}
                marketPrice={price}
              />
            ),
            stoplimit: (
              <Pages.Coins.Views.Spot.Orders.StopLimit
                product_id={product_id}
                marketPrice={price}
              />
            ),
          }[trade]
        }
      </Mui.CardContent>
    </Mui.Card>
  );
};
