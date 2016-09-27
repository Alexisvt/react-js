import * as axios from 'axios';

export function insertUser(user) {
  return {
    type: 'ADD_USER',
    payload: user
  };
}

export function updatetUser(user) {
  return {
    type: 'UPDATE_USER',
    payload: user
  };
}

export function removetUser(userId) {
  return {
    type: 'DELETE_USER',
    payload: userId
  };
}

export function fetchingUsers() {
  return {
      type: 'FETCHING_USER'
    };
}

export function getUsers() {

  return async function (dispatch) {
    dispatch(fetchingUsers());

    try {
      // const response = await axios.get('http://0b43f914.ngrok.io/rest/persons');
      const response = await new Promise(resolve => {
        setTimeout(function() {
          resolve([{firstName: 'Alexis'}]);
        }, 3000);
      });

      dispatch({
        type: 'GET_USERS',
        payload: response
      });

    } catch (error) {

      dispatch({
        type: 'FETCHING_ERROR',
        payload: error
      });

    }
  };

}