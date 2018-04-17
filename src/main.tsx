import * as React from 'react';
import { render } from 'react-dom';
import { App } from './App';
import { Provider } from 'react-redux';
import { configureStore } from './common/store';
import { initializeApp } from './domain/initialize/initializeAction';

const store = configureStore();

store.dispatch(initializeApp());

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app'),
);
