import * as Mui from "@mui/material";
import * as Router from "react-router-dom";

export const Header = () => (
  <Mui.Grid container>
    <Mui.Grid item xs={12} md={6}>
      <Mui.Stack sx={{ height: "90vh" }} justifyContent="center" spacing={2}>
        <Mui.Typography variant="h4" color="primary">
          Demo Crypto
        </Mui.Typography>
        <Mui.Typography variant="h6" sx={{ p: 1 }}>
          Now crypto currencies have a big growth. This platform provides better
          experience in Crypto Currencies Trading concepts
        </Mui.Typography>
        <Mui.Stack direction="row" spacing={2}>
          <Mui.Button
            variant="contained"
            component={Router.Link}
            to="/account/register"
          >
            Get started
          </Mui.Button>
          <Mui.Button
            variant="outlined"
            component={Router.Link}
            to="/coins/BTC-USD"
          >
            Coin
          </Mui.Button>
        </Mui.Stack>
      </Mui.Stack>
    </Mui.Grid>
    <Mui.Grid item xs={12} md={6}></Mui.Grid>
  </Mui.Grid>
);
