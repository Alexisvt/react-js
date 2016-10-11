// @flow
import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function ajaxStatusReducer(state: number = initialState.numAjaxCallsInProgress, action: {
  type: string;
}): number {
  if (action.type == types.BEGIN_AJAX_CALL) {
    return state + 1;
  } else if (action.type == types.AJAX_CALL_ERROR || action.type.endsWith('_SUCCESS')) {
    return state - 1;
  }
  return state;
}