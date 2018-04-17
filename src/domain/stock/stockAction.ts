import { StockRecord } from './StockRecord';
import { LoadableDataPackRecord } from 'infinity-list/dist';

export const RECEIVE_STOCKS_ACTION = 'RECEIVE_STOCKS_ACTION';
export const receiveStocksAction = (count: number, pack: LoadableDataPackRecord<StockRecord>) => ({
  count,
  pack,
  type: RECEIVE_STOCKS_ACTION,
});

export const ADD_STOCKS_ACTION = 'ADD_STOCKS_ACTION';
export const addStocksAction = (pack: LoadableDataPackRecord<StockRecord>) => ({
  pack,
  type: ADD_STOCKS_ACTION,
});

export const REQUEST_MORE_STOCKS_ACTION = 'REQUEST_MORE_STOCKS_ACTION';
export const requestMoreStocksAction = (startIndex: number, stopIndex: number) => ({
  startIndex,
  stopIndex,
  type: REQUEST_MORE_STOCKS_ACTION,
});
