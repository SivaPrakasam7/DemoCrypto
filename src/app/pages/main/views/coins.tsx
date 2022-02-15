import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import * as React from "react";
import * as Router from "react-router-dom";
import * as Api from "src/api";
import * as Constants from "src/constants";

export const Coins = () => {
  const { products } = Api.useCoinSocket(["status"]);
  const [filter, setFilter] = React.useState("");
  const [slice, setSlice] = React.useState(20);
  const handleMore = () => setSlice((prev) => prev + 20);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFilter(e.target.value);

  React.useEffect(() => {
    setSlice(20);
  }, [filter]);

  const coins = products
    ? products
        ?.sort((a, b) => a.id.localeCompare(b.id))
        ?.filter((coin) =>
          coin.display_name.toLowerCase().includes(filter.toLowerCase())
        )
    : [];

  return (
    <Mui.Grid container spacing={2} sx={{ pb: 10 }}>
      <Mui.Grid item xs={12}>
        <Mui.Stack
          spacing={2}
          direction={{ xs: "column", sm: "row" }}
          alignItems="center"
          justifyContent="space-between"
        >
          <Mui.Typography variant="h5" color="primary">
            {`${coins?.length} Coin pairs`}
          </Mui.Typography>
          <Mui.Box flexGrow={1} sx={{ display: { xs: "none", sm: "flex" } }} />
          <Mui.TextField
            size="small"
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <Mui.InputAdornment position="start">
                  <MuiIcons.Search color="primary" />
                </Mui.InputAdornment>
              ),
            }}
          />
        </Mui.Stack>
      </Mui.Grid>
      {products ? (
        coins.slice(0, slice).map((coin, index) => (
          <Mui.Grid key={index} item xs={12} sm={6} md={3}>
            <Mui.Card>
              <Mui.CardActionArea
                component={Router.Link}
                to={`coins/${coin.id}`}
              >
                <Mui.Stack
                  component={Mui.CardContent}
                  direction="row"
                  spacing={2}
                  alignItems="center"
                >
                  <Mui.Avatar
                    src={`${Constants.CoinUrl.Logo}/${coin.base_currency}.png`}
                  >
                    {coin.base_currency[0]}
                  </Mui.Avatar>
                  <Mui.Stack>
                    <Mui.Typography variant="body1">
                      {coin.display_name}
                    </Mui.Typography>
                    <Mui.Typography variant="body2" color="text.secondary">
                      {coin.min_market_funds}-{coin.max_market_funds}{" "}
                      {coin.base_currency}
                    </Mui.Typography>
                  </Mui.Stack>
                </Mui.Stack>
              </Mui.CardActionArea>
            </Mui.Card>
          </Mui.Grid>
        ))
      ) : (
        <Mui.Stack
          alignItems="center"
          justifyContent="center"
          sx={{ p: 2, width: "100%" }}
        >
          <Mui.CircularProgress />
        </Mui.Stack>
      )}
      <Mui.Grid
        item
        xs={12}
        component={Mui.Stack}
        justifyContent="center"
        alignItems="center"
      >
        <Mui.Button
          disabled={coins.length <= slice}
          endIcon={<MuiIcons.ArrowRight />}
          onClick={handleMore}
        >
          Load more
        </Mui.Button>
      </Mui.Grid>
    </Mui.Grid>
  );
};
