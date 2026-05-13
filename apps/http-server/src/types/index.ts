export interface User {
  id: string;
  email: string;
  passwordHash: string;
}

export interface Stock {
  id: number;
  title: string;
  symbol: string;
}

export interface AssetBalance {
  available: number;
  locked: number;
}
/*
Balances :{
  userId:{
    inr:{
      available: "10000",
      locked: "1220"
    } 
  }
}
*/
export type Balances = Record<string, Record<string, AssetBalance>>;

export type OrderSide = "BUY" | "SELL";
export type OrderType = "MARKET" | "LIMIT";

//market orders dont even reach open status
export type OrderStatus =
  | "PENDING"
  | "OPEN"
  | "PARTIALLY_FILLED"
  | "FILLED"
  | "CANCELLED";

export interface Order {
  id: string;
  userId: string;
  symbol: string;
  side: OrderSide;
  type: OrderType;
  price: number | null; // null for MARKET orders — they have no price
  qty: number;
  filledQty: number;
  status: OrderStatus;
  createdAt: Date;
}

export interface OrderBookEntry {
  orderId: string;
  userId: string;
  qty: number;
  filledQty: number;
  createdAt: Date;
}

//
export interface PriceLevel {
  totalQty: number;
  orders: OrderBookEntry[];
}

//full orderbook for one symbol
export interface SymbolOrderBook {
  bids: Map<number, PriceLevel>;
  asks: Map<number, PriceLevel>;
}

//orderbook for all symbols
export type OrderBook = Record<string, SymbolOrderBook>;
