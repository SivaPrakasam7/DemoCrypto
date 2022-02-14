import * as Mui from "@mui/material";
import * as Router from "react-router-dom";
import * as Assets from "src/assets";

export const Header = () => (
  <Mui.Grid
    container
    sx={{
      backgroundImage: { xs: `url('${Assets.CryptoCurrency}')`, md: "none" },
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
    }}
  >
    <Mui.Grid item xs={12} md={6}>
      <Mui.Stack sx={{ height: "80vh" }} justifyContent="center" spacing={2}>
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
    <Mui.Grid item xs={12} md={6} sx={{ display: { xs: "none", md: "block" } }}>
      <Mui.CardMedia
        component="img"
        src={Assets.CryptoCurrency}
        sx={{ height: "80vh", width: "50vw" }}
      />
    </Mui.Grid>
  </Mui.Grid>
);
