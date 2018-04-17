import { call, cancel, fork, put, take, takeLatest } from 'redux-saga/effects';
import { INITIALIZE_APP } from '../domain/initialize/initializeAction';
import { StockAdapter } from '../services/StockAdapter';
import { StockRecord } from '../domain/stock/StockRecord';
import { List } from 'immutable';
import { addStocksAction, receiveStocksAction, REQUEST_MORE_STOCKS_ACTION } from '../domain/stock/stockAction';
import { LoadableDataPackRecord } from 'infinity-list/dist';
import { delay } from 'redux-saga';


export function* rootSaga() {
  yield fork(function* () {
    yield takeLatest(INITIALIZE_APP, function* () {
      const stocks = yield call(requestStocks, 0, 11);

      yield put(receiveStocksAction(300, stocks));
    });
  });

  yield fork(watchRequestMore);
}


function* requestStocks(startIndex: number, stopIndex: number) {
  try {
    const response = yield StockAdapter.request(startIndex, Math.abs(stopIndex - startIndex) + 1);

    return LoadableDataPackRecord.createInstance(
        startIndex,
        stopIndex,
        List(response.map(createStock)),
    );

  } catch (e) {
    throw new Error(`Fail stock request: ${e}`);
  }
}


function* requestMore(startIndex: number, stopIndex: number) {
  const stocks = yield call(requestStocks, startIndex, stopIndex);

  yield put(addStocksAction(stocks));
}


const createStock = rawStock => StockRecord.createInstance({
  ...rawStock,
  country: rawStock.country.name,
  industry: rawStock.industry.name,
  capitalization: rawStock.key_numbers.capitalization,
  d1Return: rawStock.key_numbers.d1_return,
  assetId: rawStock.asset_id,
  price: rawStock.key_numbers.price,
  logo: rawStock.media.find(({ type }) => 'logo' === type).url,
});


export function* watchRequestMore() {
  let task;

  while (true) {
    const { startIndex, stopIndex } = yield take(REQUEST_MORE_STOCKS_ACTION);

    if (task) {
      yield cancel(task);
    }

    task = yield fork(function* () {
      yield call(delay, 250);

      yield call(requestMore, startIndex, stopIndex);
    });
  }
}
