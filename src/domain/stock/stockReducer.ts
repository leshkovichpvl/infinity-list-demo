import { ADD_STOCKS_ACTION, RECEIVE_STOCKS_ACTION } from './stockAction';
import { StockRecord } from './StockRecord';
import { LoadableDataRecord } from 'infinity-list/dist';


export const stockReducer = (state: LoadableDataRecord<StockRecord>, action) => {
  switch (action.type){
    case RECEIVE_STOCKS_ACTION: {
      return state.addPack(action.pack).setDataCount(action.count);
    }
    case ADD_STOCKS_ACTION: {
      return state.addPack(action.pack);
    }

    default:
      return state;
  }
};
