import * as Mui from "@mui/material";
import * as Pages from "src/app/pages";

export const Main = () => (
  <Mui.Box>
    <Pages.Main.Views.Header />
    <Pages.Main.Views.TradeType />
    <Pages.Main.Views.Coins />
    <Pages.Main.Views.Footer />
  </Mui.Box>
);
