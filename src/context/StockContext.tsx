import React, {createContext} from 'react';
import {Log, StockItem} from '../types';

/**
 * context provider for stock
 * use for storing stocks and logs data
 */

type StockContextState = {
  stocks: Array<StockItem>;
  logs: Array<Log>;
  setStocks: (t: Array<StockItem>) => void;
  setLogs: (t: Array<Log>) => void;
};

const defaultValues: StockContextState = {
  stocks: [],
  logs: [],
  setStocks: () => {},
  setLogs: () => {},
};

export const StockContext = createContext<StockContextState>(defaultValues);

const {Provider} = StockContext;

const StockProvider = ({children}: {children: any}) => {
  const [stocks, setStocksData] = React.useState<Array<StockItem>>([]);
  const [logs, setLogsData] = React.useState<Array<Log>>([]);

  const setStocks = (data: Array<StockItem>) => setStocksData(data);

  const setLogs = (data: Array<Log>) => setLogsData(data);

  return (
    <Provider value={{stocks, logs, setStocks, setLogs}}>{children}</Provider>
  );
};

export const useStockContext = () => React.useContext(StockContext);

export default StockProvider;
