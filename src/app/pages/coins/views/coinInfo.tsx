import * as Mui from "@mui/material";
import * as React from "react";
import * as Components from "src/app/components";
import * as Constants from "src/constants";
import * as Api from "src/api";

export const CoinInfo = ({ coin }: { coin: Api.socket.ticker }) => {
  const isMobile = Mui.useMediaQuery(Mui.useTheme().breakpoints.down("sm"));
  return (
    <Mui.Card>
      <Mui.CardContent
        component={Mui.Stack}
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        spacing={2}
      >
        <Mui.Stack
          spacing={1}
          direction="row"
          alignItems="center"
          justifyContent="inherit"
        >
          <Mui.Avatar
            src={`${Constants.CoinUrl.Logo}${coin?.product_id
              .split("-")
              .at(0)}.png`}
            sx={{ height: 50, width: 50 }}
          >
            {coin?.product_id[0]}
          </Mui.Avatar>
          <Mui.Stack>
            <Mui.Typography variant="body1" color="primary">
              {parseFloat(`${coin?.price}`).toFixed(2)}
            </Mui.Typography>
            <Mui.Typography variant="caption" color="text.secondary">
              {coin?.product_id}
            </Mui.Typography>
          </Mui.Stack>
        </Mui.Stack>
        {!isMobile && (
          <React.Fragment>
            <Components.StackLabel
              label="24h Change"
              value={`${(coin?.price - coin?.open_24h).toFixed(2)} ${(
                ((coin?.price - coin?.open_24h) / coin?.open_24h) *
                100
              ).toFixed(2)}%`}
              valueColor={
                coin?.price - coin?.open_24h > 0 ? "success.main" : "error.main"
              }
            />
            <Components.StackLabel
              label="24h High"
              value={parseFloat(`${coin?.high_24h}`).toFixed(2)}
            />
            <Components.StackLabel
              label="24h Low"
              value={parseFloat(`${coin?.low_24h}`).toFixed(2)}
            />
            <Components.StackLabel
              label="24h Volumne"
              value={parseFloat(`${coin?.volume_24h}`).toFixed(2)}
            />
            <Components.StackLabel
              label="30d Volumne"
              value={parseFloat(`${coin?.volume_30d}`).toFixed(2)}
            />
          </React.Fragment>
        )}
        <Mui.Stack
          direction="row"
          spacing={2}
          justifyContent="inherit"
          sx={{ display: { sm: "none" } }}
        >
          <Components.StackLabel
            label="24h Change"
            value={`${(coin?.price - coin?.open_24h).toFixed(2)} ${(
              ((coin?.price - coin?.open_24h) / coin?.open_24h) *
              100
            ).toFixed(2)}%`}
            valueColor={
              coin?.price - coin?.open_24h > 0 ? "success.main" : "error.main"
            }
          />
          <Components.StackLabel
            label="24h High"
            value={parseFloat(`${coin?.high_24h}`).toFixed(2)}
          />
          <Components.StackLabel
            label="24h Low"
            value={parseFloat(`${coin?.low_24h}`).toFixed(2)}
          />
        </Mui.Stack>
        <Mui.Stack
          direction="row"
          spacing={2}
          justifyContent="inherit"
          sx={{ display: { sm: "none" } }}
        >
          <Components.StackLabel
            label="24h Volumne"
            value={parseFloat(`${coin?.volume_24h}`).toFixed(2)}
          />
          <Components.StackLabel
            label="30d Volumne"
            value={parseFloat(`${coin?.volume_30d}`).toFixed(2)}
          />
        </Mui.Stack>
      </Mui.CardContent>
    </Mui.Card>
  );
};
