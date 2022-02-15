import * as Mui from "@mui/material";
import ApexChart from "apexcharts";
import Chart from "react-apexcharts";
import * as Api from "src/api";

const options: ApexChart.ApexOptions = {
  chart: {
    type: "candlestick",
  },
  stroke: {
    width: [2, 1],
  },
  tooltip: {
    enabled: true,
  },
  xaxis: {
    type: "category",
    labels: {
      formatter: (val: string) =>
        new Date(val).toLocaleString("en-US", {
          day: "numeric",
          month: "short",
        }),
    },
  },
  yaxis: [
    {
      opposite: true,
      tooltip: {
        enabled: true,
      },
    },
  ],
};

export const CoinChart = () => {
  const { data: candles } = Api.useCandles();
  // const line = candles?.slice(0, 50)?.map((a) => [a.at(0), a.at(1)]);
  const candle = candles?.map((a) => a.slice(0, 5));

  return (
    <Mui.Card sx={{ height: 450 }}>
      <Mui.CardContent id="chart">
        <Chart
          options={options}
          series={[
            {
              name: "candle",
              type: "candlestick",
              data: candle
                ?.filter((_val, index) => index % 2)
                ?.filter((_val, index) => index % 2),
            },
            // {
            //   name: "line",
            //   type: "line",
            //   data: line,
            // },
          ]}
          type="candlestick"
          height={450}
        />
      </Mui.CardContent>
    </Mui.Card>
  );
};
