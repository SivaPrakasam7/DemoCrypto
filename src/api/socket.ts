import * as React from "react";
import * as Router from "react-router-dom";
import * as Constants from "src/constants";

export const useCoinSocket = (channels: string[]) => {
  const { coin } = Router.useParams();
  const ws = React.useRef<WebSocket | null>(null);

  // Data States
  const [state, setState] = React.useState("uninitialized");
  const [coins, setCoins] = React.useState<socket.ticker>();
  const [products, setProducts] = React.useState<socket.products[]>();
  const [match, setMatch] = React.useState<socket.match>();

  const getStatus = () => {
    ws.current?.send(
      JSON.stringify({
        type: "subscribe",
        channels,
      })
    );
  };

  const getTickers = (coin: string) => {
    ws.current?.send(
      JSON.stringify({
        type: "subscribe",
        product_ids: [coin],
        channels,
      })
    );
  };

  // Initialization
  React.useEffect(() => {
    ws.current = new WebSocket(Constants.CoinUrl.Socket);
    ws.current.onopen = () => setState("open");
    ws.current.onclose = () => setState("closed");
    channels.length === 1
      ? setTimeout(() => getStatus(), 3000)
      : setTimeout(() => getTickers(coin as string), 3000);
    return () => ws.current?.close();
  }, []);

  // Receive Message
  React.useEffect(() => {
    if (!ws.current) return;
    ws.current.onmessage = (e) => {
      const message = JSON.parse(e.data);
      message?.type === "ticker" &&
        message?.product_id === coin &&
        setCoins(message);
      message?.type === "match" && setMatch(message);
      message?.type === "status" && setProducts(message?.products);
      console.info(message);
    };
  });

  return { state, coins, products, match };
};

const createCandle = (match: socket.match) => {
  const candles = {};
};

export declare namespace socket {
  export interface ticker {
    best_ask: number;
    best_bid: number;
    high_24h: number;
    last_size: number;
    low_24h: number;
    open_24h: number;
    price: number;
    product_id: string;
    sequence: number;
    side: "buy" | "sell";
    time: string;
    trade_id: number;
    type: "ticker";
    volume_24h: number;
    volume_30d: number;
  }
  export interface match {
    maker_order_id: string;
    price: number;
    product_id: string;
    sequence: number;
    side: "buy" | "sell";
    size: number;
    taker_order_id: string;
    time: string;
    trade_id: number;
    type: "match";
  }
  export interface products {
    id: string;
    base_currency: string;
    display_name: string;
    status: string;
    min_market_funds: string;
    max_market_funds: string;
    base_increment: string;
  }
}

// best_ask: "2937.32";
// best_bid: "2937.29";
// high_24h: "3140.86";
// last_size: "0.00718929";
// low_24h: "2879.34";
// open_24h: "3071.62";
// price: "2937.29";
// product_id: "ETH-USD";
// sequence: 25647977604;
// side: "sell";
// time: "2022-02-12T08:09:31.906099Z";
// trade_id: 222107066;
// type: "ticker";
// volume_24h: "227195.59685379";
// volume_30d: "6674195.16561498";
