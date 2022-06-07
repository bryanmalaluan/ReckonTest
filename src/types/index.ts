export type Stock = {
  code: string;
  price: number;
};

export type StockItem = {
  code: string;
  starting: number;
  lowest: number;
  highest: number;
  current: number;
};

export type Log = {
  updatedAt: string;
  stocks: Array<Stock>;
};
