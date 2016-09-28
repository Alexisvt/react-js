import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';

import createSagaMiddleware from 'redux-saga';
import reducer from './reducers';

import { helloSaga } from './sagas';

const sagaMiddleware = createSagaMiddleware();
const middlewares = applyMiddleware(sagaMiddleware);

const store = createStore(reducer, middlewares);

sagaMiddleware.run(helloSaga);