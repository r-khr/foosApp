import * as types from './actionTypes';

export function newGame(data) {
  return {
    type: types.NEW_GAME,
    payload: data
  };
}

export function updateGame(data) {
  return {
    type: types.UPDATE_GAME,
    payload: data
  };
}

