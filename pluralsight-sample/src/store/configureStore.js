import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';
import rootReducer from '../reducers';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

//TODO: Remove this, just for development
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(initialState) {
  // return createStore(rootReducer, initialState, applyMiddleware(thunk, logger()));
  return createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(thunk, logger())));
}