import * as types from './actionTypes';
import AuthorApi from '../api/mockAuthorApi';
import {
  smartController
} from '../helpers';
import {beginAjaxCall} from './ajaxStatusActions';

export function loadAuthorsSuccess(authors) {
  return {
    type: types.LOAD_AUTHORS_SUCCESS,
    authors
  };
}

export function loadAuthors() {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    smartController(function* () {
      try {
        const authors = yield AuthorApi.getAllAuthors();
        dispatch(loadAuthorsSuccess(authors));
      } catch (error) {
        throw(error);
      }
    });
  };
}