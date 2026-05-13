export type OrderType = "limit" | "market";
export type OrderSide = "sell" | "buy";
export type OrderStatus = "open" | "filled" | "partially_filled" | "cancelled";

export interface AssetBalance {
  availableBalance: number;
  lockedBalance: number;
}

export interface Order {
  id: string;
  price?: number;
  qty: number;
  filledQty?: number;
  symbol: string;
  type: OrderType;
  side: OrderSide;
  createdAt: Date;
}
