import { combineReducers } from 'redux';
import { courseReducer as courses } from './courseReducer';
import { authorReducer as authors } from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducers';

const rootReducer = combineReducers({
  courses,
  authors,
  ajaxCallsInProgress
});

export default rootReducer;