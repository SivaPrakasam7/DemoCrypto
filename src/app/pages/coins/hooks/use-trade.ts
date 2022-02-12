import * as React from "react";

export const useOrder = (
  availableBalance: number,
  marketValue: number,
  commission: number,
  type: "limit" | "market" | "stoplimit"
) => {
  const actualBalance = availableBalance - availableBalance * commission;
  const [coins, setCoin] = React.useState(0);
  const [amount, setAmount] = React.useState(0);
  const [total, setTotal] = React.useState(amount + amount * commission);
  const [limitPrice, setLimitPrice] = React.useState(marketValue);
  const [stopLimitPrice, setStopLimitPrice] = React.useState(marketValue);
  const [slider, setSlider] = React.useState(0);
  const [order, setOrder] = React.useState<"buy" | "sell">("sell");
  const coinValue = {
    market: marketValue,
    limit: limitPrice,
    stoplimit: limitPrice,
  }[type];

  // handle Order Type
  const handleBuy = () => setOrder("buy");
  const handleSell = () => setOrder("sell");

  // handle Slider
  const handlePercentage = (_event: Event, value: number | number[]) => {
    if (!availableBalance) return;
    setCoin(
      +(
        ((value as unknown as number) / 100) *
        (actualBalance / coinValue)
      ).toFixed(8)
    );
    setAmount(
      +(((value as unknown as number) / 100) * actualBalance).toFixed(2)
    );
  };

  const handleCoinAmount = () => {
    setAmount(actualBalance);
    setCoin(+(actualBalance / coinValue).toFixed(8));
  };

  // handle by Coin
  const handleCoin = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!availableBalance) return;
    const value = +event.target.value;
    if (value <= 0) {
      setCoin((coin) => coin);
      return;
    }
    if (value * coinValue * commission > availableBalance) {
      handleCoinAmount();
      return;
    }
    setCoin(value);
    setAmount(value * coinValue);
  };

  // handle user Amount
  const handleAmount = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!availableBalance) return;
    const value = +event.target.value;
    if (value <= 0) {
      setAmount((amount) => amount);
      return;
    }
    if (value * commission > availableBalance) {
      handleCoinAmount();
      return;
    }
    setAmount(value);
    setCoin(value / coinValue);
  };

  // handle limit price
  const handleLimit = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!marketValue) return;
    const value = +event.target.value;
    if (value <= 0) {
      setLimitPrice((price) => +price.toFixed(2));
      return;
    }
    setLimitPrice(+value.toFixed(2));
  };

  // handle stop limit price
  const handleStopLimit = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!marketValue) return;
    const value = +event.target.value;
    setStopLimitPrice(+value.toFixed(2));
  };

  // Price corrections
  React.useEffect(() => {
    setSlider(+((amount / actualBalance) * 100).toFixed(2));
    setTotal(+(amount + amount * commission).toFixed(2));
    if (coins * coinValue * commission > availableBalance) handleCoinAmount();
    if (limitPrice > marketValue && order === "buy")
      setLimitPrice(+marketValue.toFixed(2));
    if (stopLimitPrice <= marketValue && order === "buy")
      setStopLimitPrice(+marketValue.toFixed(2));
    if (stopLimitPrice > marketValue && order === "sell")
      setStopLimitPrice(+marketValue.toFixed(2));
    if (limitPrice <= marketValue && order === "sell")
      setLimitPrice(+marketValue.toFixed(2));
  });

  return {
    amount,
    coins,
    total,
    limitPrice,
    stopLimitPrice,
    slider,
    order,
    handleAmount,
    handleCoin,
    handleLimit,
    handleStopLimit,
    handlePercentage,
    handleBuy,
    handleSell,
  };
};
