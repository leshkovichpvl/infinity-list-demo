import { combineReducers } from 'redux-immutable';
import { stockReducer } from '../domain/stock/stockReducer';


export const rootReducer = combineReducers({
  stocks: stockReducer,
});
