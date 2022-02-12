import * as Axios from "axios";
import * as ReactQuery from "react-query";
import * as Constants from "src/constants";

const Client = Axios.default.create({
  baseURL: Constants.CoinUrl.Products,
});

export const useCoins = () =>
  ReactQuery.useQuery<coins.info[]>(["coins"], () =>
    Client("products").then((res) => res.data)
  );

export declare namespace coins{
  export interface info{
    id:string;
    base_currency:string;
    display_name:string;
    status:string;
    min_market_funds:string;
    max_market_funds:string;
  }
}