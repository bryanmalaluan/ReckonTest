import axios from 'axios';
import {Stock} from '../types';

class StockService {
  async getStocks(): Promise<Array<Stock>> {
    let stocks: Array<Stock> = [];

    try {
      const url = 'https://join.reckon.com/stock-pricing';
      const response = await axios.get(url);
      stocks = response.data;
    } catch (ex) {
      console.log('[GetStocks Exception]: ', ex);
    }
    return stocks;
  }
}

const stockService = new StockService();
export default stockService;
