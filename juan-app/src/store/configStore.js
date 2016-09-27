import {
  createStore,
  applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../reducers';

const middlewares = applyMiddleware(thunk, logger());

export default function configStore(initialState) {
  return createStore(rootReducer, initialState, middlewares);
}