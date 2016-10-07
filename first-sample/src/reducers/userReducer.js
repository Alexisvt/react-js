// @flow
import type { UserTypes } from '../actions/userActions';

export type UserState = {
  name: string;
  age: number;
  email: string;
}

const initialState = [{
  name: 'Alexis',
  age: 31,
  email: 'alexisvt@gmail.com'
}];

export const userReducer = (state: UserState[] = initialState, action: UserTypes) => {
  switch (action.type) {
    case 'GET_USERS':
      return state;
    default:
      break;
  }
  return state;
};

