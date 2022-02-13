import * as Mui from "@mui/material";
import * as Api from "src/api";

export const RecentTrade = ({
  id,
  match,
}: {
  id: string;
  match: Api.socket.match[];
}) => (
  <Mui.Card sx={{ maxHeigth: 450, height: "100%" }}>
    <Mui.CardContent>
      <Mui.Typography variant="h6" color="primary.main">
        Recent Trades
      </Mui.Typography>
      <Mui.TableContainer>
        <Mui.Table size="small">
          <Mui.TableHead
            sx={{
              "& .MuiTableCell-root": {
                px: 0.1,
              },
            }}
          >
            <Mui.TableCell>{`Price(${id.split("-")[1]})`}</Mui.TableCell>
            <Mui.TableCell>{`Amount(${id.split("-")[0]})`}</Mui.TableCell>
            <Mui.TableCell>Total</Mui.TableCell>
          </Mui.TableHead>
          {match?.map(({ price, size, side }, index) => (
            <Mui.TableRow
              key={index}
              sx={{
                "& .MuiTableCell-root": {
                  border: "none",
                  px: 0.5,
                },
              }}
            >
              <Mui.TableCell
                sx={{ color: side === "buy" ? "success.main" : "error.main" }}
              >
                {parseFloat(price.toString()).toFixed(2)}
              </Mui.TableCell>
              <Mui.TableCell>
                {parseFloat(size.toString()).toFixed(6)}
              </Mui.TableCell>
              <Mui.TableCell>
                {parseFloat((price * size).toString()).toFixed(2)}
              </Mui.TableCell>
            </Mui.TableRow>
          ))}
        </Mui.Table>
      </Mui.TableContainer>
    </Mui.CardContent>
  </Mui.Card>
);
