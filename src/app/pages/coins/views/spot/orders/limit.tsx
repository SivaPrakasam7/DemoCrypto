import * as Mui from "@mui/material";
import * as Pages from "src/app/pages";
import * as Components from "src/app/components";

export const LimitOrder = ({ marketValue }: { marketValue: number }) => {
  const availableBalance = 4598754;
  const commission = 0.01;
  const {
    coins,
    limitPrice,
    order,
    slider,
    handleBuy,
    handleCoin,
    handleLimit,
    handleSell,
    handlePercentage,
  } = Pages.Coins.Hooks.useOrder(
    availableBalance,
    parseFloat(marketValue.toString()),
    commission,
    "limit"
  );
  return (
    <>
      <Pages.Coins.Views.Spot.Views.OrderTypeButtons
        order={order}
        handleBuy={handleBuy}
        handleSell={handleSell}
      />
      <Components.SpotField
        startLabel="Limit Price"
        endLabel="USDT"
        name="limitPrice"
        value={limitPrice}
        onChange={handleLimit}
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
