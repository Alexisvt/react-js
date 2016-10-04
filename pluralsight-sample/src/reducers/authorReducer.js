import * as types from '../actions/actionTypes';
import initialSatate from './initialState';

export function authorReducer(state = initialSatate.authors, action) {
  switch (action.type) {
    case types.LOAD_AUTHORS_SUCCESS:
      return action.authors;
    default:
      return state;
  }
}