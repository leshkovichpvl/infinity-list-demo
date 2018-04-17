import { applyMiddleware, createStore } from 'redux';
import reduxSaga from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './rootReducer';
import { initialState } from './initialState';
import { rootSaga } from './rootSaga';

export const configureStore = () => {
  const sagaMiddleware = reduxSaga();

  const composeEnhancers = composeWithDevTools({});

  const store = createStore(
      rootReducer,
      initialState,
      composeEnhancers(applyMiddleware(sagaMiddleware)),
  );

  sagaMiddleware.run(rootSaga);

  return store;
};
