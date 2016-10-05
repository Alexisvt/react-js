import * as types from '../actions/actionTypes';
import initialState from './initialState';

export function courseReducer(state = initialState.courses, action) {
  switch (action.type) {
    case types.LOAD_COURSES_SUCCESS:
      return action.courses;
    case types.CREATE_COURSES_SUCCESS:
      return [...state, {...action.course}];
    case types.UPDATE_COURSES_SUCCESS:
      // Creating a new array that at first, remove the updated item and then I add the course again but with the new data
      return [...state.filter(course => course.id !== action.course.id), {...action.course}];
    default:
      return state;
  }
}