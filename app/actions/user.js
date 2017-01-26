import * as types from './actionTypes';

export function setUserData(data) {
  return {
    type: types.SET_USER,
    payload: data
  };
}

