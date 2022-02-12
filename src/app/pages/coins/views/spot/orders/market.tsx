import * as Mui from "@mui/material";
import * as Pages from "src/app/pages";
import * as Components from "src/app/components";

export const MarketOrder = ({ marketValue }: { marketValue: number }) => {
  const availableBalance = 4598754;
  const commission = 0.01;
  const {
    coins,
    order,
    slider,
    handleBuy,
    handleCoin,
    handleSell,
    handlePercentage,
  } = Pages.Coins.Hooks.useOrder(
    availableBalance,
    parseFloat(marketValue.toString()),
    commission,
    "market"
  );
  return (
    <>
      <Pages.Coins.Views.Spot.Views.OrderTypeButtons
        order={order}
        handleBuy={handleBuy}
        handleSell={handleSell}
      />
      <Components.SpotField
        startLabel="Amount"
        endLabel="BTC"
        name="coins"
        value={coins}
        onChange={handleCoin}
      />
      <Mui.Slider
        size="small"
        valueLabelDisplay="auto"
        value={slider}
        onChange={handlePercentage}
        valueLabelFormat={(value: number) => `${value}%`}
        marks={[
          {
            value: 0,
            label: "0%",
          },
          {
            value: 25,
            label: "25%",
          },
          {
            value: 50,
            label: "50%",
          },
          {
            value: 75,
            label: "75%",
          },
          {
            value: 100,
            label: "100%",
          },
        ]}
      />
      <Pages.Coins.Views.Spot.Views.PlaceOrder />
    </>
  );
};
