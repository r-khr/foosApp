import * as types from './actionTypes';

export function loadMoreGames(data) {
  return {
    type: types.LOAD_MORE,
    payload: data
  };
}

