import { Record } from 'immutable';



export class StockRecord extends Record({
  assetId: void 0,
  name: void 0,
  industry: void 0,
  country: void 0,
  logo: void 0,
  ticker: void 0,
  capitalization: void 0,
  price: void 0,
  d1Return: void 0,
}){
  readonly assetId: number | null;
  readonly name: string;
  readonly industry: string;
  readonly country: string;
  readonly logo: string;
  readonly ticker: string;
  readonly capitalization: number;
  readonly price: number | null;
  readonly d1Return: number;

  static createInstance(data) {
    return new StockRecord(data);
  }
}
