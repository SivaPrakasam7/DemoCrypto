import * as Mui from "@mui/material";
import * as Router from "react-router-dom";
import * as Assets from "src/assets";

export const TradeType = () => (
  <Mui.Grid container>
    <Mui.Grid item xs={12} md={6}>
      <Mui.CardMedia component="img" src={Assets.CryptoMobile} />
    </Mui.Grid>
    <Mui.Grid item xs={12} md={6}>
      <Mui.Stack sx={{ height: "90vh" }} justifyContent="center" spacing={2}>
        <Mui.Typography variant="h5" color="primary">
          Order Type
        </Mui.Typography>
        <Mui.List>
          <Mui.ListItem>
            <Mui.Typography
              variant="h6"
              color="primary.main"
              sx={{
                m: 1,
                p: 0.5,
                px: 1.5,
                border: (theme) => `1px solid ${theme.palette.primary.main}`,
                borderRadius: "100%",
              }}
            >
              1
            </Mui.Typography>
            <Mui.Stack spacing={1}>
              <Mui.Typography variant="body1">Market Order</Mui.Typography>
              <Mui.Typography variant="body2" color="text.secondary">
                A market order is an order to buy or sell a stock at the
                market's current best available price.
              </Mui.Typography>
            </Mui.Stack>
          </Mui.ListItem>
          <Mui.ListItem>
            <Mui.Typography
              variant="h6"
              color="primary.main"
              sx={{
                m: 1,
                p: 0.5,
                px: 1.5,
                border: (theme) => `1px solid ${theme.palette.primary.main}`,
                borderRadius: "100%",
              }}
            >
              2
            </Mui.Typography>
            <Mui.Stack spacing={1}>
              <Mui.Typography variant="body1">Limit Order</Mui.Typography>
              <Mui.Typography variant="body2" color="text.secondary">
                A limit order is an order to buy or sell a stock at a specific
                price or better.
              </Mui.Typography>
            </Mui.Stack>
          </Mui.ListItem>
          <Mui.ListItem>
            <Mui.Typography
              variant="h6"
              color="primary.main"
              sx={{
                m: 1,
                p: 0.5,
                px: 1.5,
                border: (theme) => `1px solid ${theme.palette.primary.main}`,
                borderRadius: "100%",
              }}
            >
              3
            </Mui.Typography>
            <Mui.Stack spacing={1}>
              <Mui.Typography variant="body1">Stop Limit Order</Mui.Typography>
              <Mui.Typography variant="body2" color="text.secondary">
                A stop-limit order is an order to buy or sell a stock that
                combines the features of a stop order and a limit order.
              </Mui.Typography>
            </Mui.Stack>
          </Mui.ListItem>
        </Mui.List>
        <Mui.Stack direction="row" spacing={2}>
          <Mui.Button
            variant="contained"
            component={Router.Link}
            to="/coins/BTC-USD"
          >
            Practice
          </Mui.Button>
        </Mui.Stack>
      </Mui.Stack>
    </Mui.Grid>
  </Mui.Grid>
);
