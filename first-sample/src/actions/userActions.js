// @flow

export type UserTypes = {
  type: 'GET_USERS' | 'SAVE_USERS'
}

export function getUsersAction (): UserTypes {
  return {type: 'GET_USERS'};
};