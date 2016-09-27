export default function userReducer(state = [], action) {
  switch (action.type) {

    case 'FETCHING_USER':
      return state;

    case 'FETCHING_ERROR':
      return state;

    case 'ADD_USER':
      return state;

    case 'UPDATE_USER':
      return state;

    case 'DELETE_USER':
      return state;

    case 'GET_USERS':
      return [...state, ...action.payload];

    default:
      return state;
  }
}