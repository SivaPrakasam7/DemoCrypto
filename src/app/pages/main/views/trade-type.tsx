import * as Mui from "@mui/material";
import * as Router from "react-router-dom";

export const TradeType = () => (
  <Mui.Grid container>
    <Mui.Grid item xs={12} md={6}></Mui.Grid>
    <Mui.Grid item xs={12} md={6}>
      <Mui.Stack sx={{ height: "90vh" }} justifyContent="center" spacing={2}>
        <Mui.Typography variant="h5" color="primary">
          Order Type
        </Mui.Typography>
        <Mui.List>
          <Mui.ListItem>
            <Mui.Typography variant="h6" color="primary.main" sx={{ mx: 1 }}>
              1
            </Mui.Typography>
            Market order
          </Mui.ListItem>
          <Mui.ListItem>
            <Mui.Typography variant="h6" color="primary.main" sx={{ mx: 1 }}>
              2
            </Mui.Typography>
            Limit order
          </Mui.ListItem>
          <Mui.ListItem>
            <Mui.Typography variant="h6" color="primary.main" sx={{ mx: 1 }}>
              3
            </Mui.Typography>
            Stop limit order
          </Mui.ListItem>
        </Mui.List>
        <Mui.Stack direction="row" spacing={2}>
          <Mui.Button
            variant="contained"
            component={Router.Link}
            to="/coins"
          >
            Practice
          </Mui.Button>
        </Mui.Stack>
      </Mui.Stack>
    </Mui.Grid>
  </Mui.Grid>
);
