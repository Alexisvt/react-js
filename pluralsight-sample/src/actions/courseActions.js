import * as types from './actionTypes';
import CourseApi from '../api/mockCourseApi';
import {
  smartController
} from '../helpers';

export function loadCoursesSuccess(courses) {
  return {
    type: types.LOAD_COURSES_SUCCESS,
    courses
  };
}

export function loadCourses() {
  return function (dispatch) {

    smartController(function* () {
      const courses = yield CourseApi.getAllCourses();
      dispatch(loadCoursesSuccess(courses));
    });

    // return courseApi.getAllAuthors().then( courses => {
    //   dispatch(loadCoursesSuccess());
    // }).catch(error => {
    //   throw(error);
    // });
  };
}

export function updateCourseSuccess(course) {
  return {
    type: types.UPDATE_COURSES_SUCCESS,
    course
  };
}

export function createCourseSuccess(course) {
  return {
    type: types.CREATE_COURSES_SUCCESS,
    course
  };
}

export function saveCourse(course) {
  return async function (dispatch, getState) {
    try {
      const savedCourse = await CourseApi.saveCourse(course);
      if (course.id) {
        dispatch(updateCourseSuccess(savedCourse));
      } else {
        dispatch(createCourseSuccess(savedCourse));
      }
    } catch (error) {
      throw (error);
    }

  };
}