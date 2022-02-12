import * as Mui from "@mui/material";

export const OrderTypeButtons = ({
  handleBuy,
  handleSell,
  order,
}: orderTypeButtons.Props) => (
  <Mui.Stack direction="row" justifyContent="space-between">
    <Mui.Button
      color="error"
      size="small"
      sx={{ minWidth: 100 }}
      onClick={handleSell}
      variant={order === "sell" ? "contained" : "outlined"}
    >
      Sell
    </Mui.Button>
    <Mui.Button
      color="success"
      size="small"
      sx={{ minWidth: 100 }}
      onClick={handleBuy}
      variant={order === "buy" ? "contained" : "outlined"}
    >
      Buy
    </Mui.Button>
  </Mui.Stack>
);

export declare namespace orderTypeButtons {
  export interface Props {
    order: "buy" | "sell";
    handleSell: () => void;
    handleBuy: () => void;
  }
}
