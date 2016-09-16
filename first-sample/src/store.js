import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import { userReducer as users } from './reducers';

const reducers = combineReducers({
  users
});
const middlewares = applyMiddleware(logger());

export default createStore(reducers, middlewares);