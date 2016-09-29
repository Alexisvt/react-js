import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';
import { smartController } from '../helpers';

export function loadCoursesSuccess(courses) {
  return {
    type: types.LOAD_COURSES_SUCCESS,
    courses
  };
}

export function loadCourses() {
  return function(dispatch) {
    
    smartController(function*() {
      const courses = yield courseApi.getAllCourses();
      dispatch(loadCoursesSuccess(courses));
    });

    // return courseApi.getAllAuthors().then( courses => {
    //   dispatch(loadCoursesSuccess());
    // }).catch(error => {
    //   throw(error);
    // });
  };
}