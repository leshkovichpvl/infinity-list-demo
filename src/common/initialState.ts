import { StockRecord } from '../domain/stock/StockRecord';
import { Record } from 'immutable';
import { LoadableDataRecord } from 'infinity-list/dist';


export class StateRecord extends Record({
  stocks: LoadableDataRecord.createNullInstance<StockRecord>(),
}){
  readonly stocks: LoadableDataRecord<StockRecord>;
}


export const initialState = new StateRecord({
  stocks: LoadableDataRecord.createNullInstance<StockRecord>(),
});
