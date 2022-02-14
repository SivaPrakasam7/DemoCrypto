import * as Axios from "axios";
import * as ReactQuery from "react-query";
import * as Router from "react-router-dom";
import * as Constants from "src/constants";

const Client = Axios.default.create({
  baseURL: Constants.CoinUrl.Products,
});

export const useCandles = () => {
  const { coin } = Router.useParams();
  return ReactQuery.useQuery<number[][]>(["coins"], () =>
    Client(`products/${coin}/candles?granularity=86400`).then((res) => res.data)
  );
};
