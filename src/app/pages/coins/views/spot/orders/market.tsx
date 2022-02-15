import * as Mui from "@mui/material";
import * as ReactFire from "reactfire";
import * as Pages from "src/app/pages";
import * as Components from "src/app/components";

export const MarketOrder = ({
  product_id,
  marketPrice,
}: {
  product_id: string;
  marketPrice: number;
}) => {
  const { data: user } = ReactFire.useUser();
  const { status, trade } = Pages.Coins.Hooks.useTrade(user?.uid as string);
  const [coin, pair] = product_id.split("-");
  const availableBalance = 4598754;
  const commission = 0.01;
  const {
    amount,
    coins,
    order,
    slider,
    handleBuy,
    handleCoin,
    handleSell,
    handlePercentage,
  } = Pages.Coins.Hooks.useOrder(
    availableBalance,
    parseFloat(marketPrice.toString()),
    commission,
    "market"
  );

  const handlePlaceOrder = () => {
    const newOrder: trade = {
      amount,
      coin,
      commission: 0.01,
      marketPrice,
      noOfCoins: coins,
      orderCancelled: false,
      orderType: order === "buy" ? 2 : 3,
      executedAt: null,
      pair,
      placedAt: new Date().getTime(),
      side: order,
      status: "pending",
      uid: user?.uid as string,
    };
    trade(newOrder);
  };

  return (
    <>
      <Pages.Coins.Views.Spot.Views.OrderTypeButtons
        order={order}
        handleBuy={handleBuy}
        handleSell={handleSell}
      />
      <Components.SpotField
        startLabel="Amount"
        endLabel={coin}
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
      {status === "completed" && (
        <Mui.Typography variant="caption" color="success.main">
          Order Placed Successfully!
        </Mui.Typography>
      )}
      <Pages.Coins.Views.Spot.Views.PlaceOrder
        loading={status === "loading"}
        onClick={handlePlaceOrder}
      />
    </>
  );
};
