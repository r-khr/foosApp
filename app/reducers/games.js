// @flow
import * as actions from '../actions/user';
import {
    LOAD_MORE
} from '../actions/actionTypes';

const INITIAL_STATE = [
  {

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
