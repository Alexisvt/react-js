import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';

import createSagaMiddleware from 'redux-saga';
import reducer from './reducers';
import Counter from './Counter';
import logger from 'redux-logger';

import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const middlewares = applyMiddleware(sagaMiddleware, logger());

const store = createStore(reducer, middlewares);

const action = type => store.dispatch({ type });

sagaMiddleware.run(rootSaga);

function render() { ReactDOM.render(<Counter value={store.getState()} onIncrementAsync={() => action('INCREMENT_ASYNC')} ></Counter>, document.getElementById('main')); }

render();
store.subscribe(render);