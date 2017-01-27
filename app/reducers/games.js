// @flow
import * as actions from '../actions/user';
import {
    LOAD_MORE
} from '../actions/actionTypes';

const INITIAL_STATE = [
  {
    player1: 'John',
    player2: 'William',
  },
  {
    player1: 'Mark',
    player2: 'Andrew',
  },
  {
    player1: 'Jack',
    player2: 'Warren',
  }
];

export default function Games(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOAD_MORE:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}
