// @flow
import * as actions from '../actions/user';
import {
    NEW_GAME,
    UPDATE_GAME,
    POST_GAME
} from '../actions/actionTypes';

const INITIAL_STATE = {

};

export default function Play(state = INITIAL_STATE, action) {
  switch (action.type) {
    case NEW_GAME:
      return Object.assign({}, state, action.payload);
    case UPDATE_GAME:
      return Object.assign({}, state, action.payload);
    case POST_GAME:
      return state;
    default:
      return state;
  }
}
