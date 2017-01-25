// @flow
import * as actions from '../actions/user';
import {
    SET_USER
} from '../actions/actionTypes';

const INITIAL_STATE = {
  firstName: '',
  lastName: '',
  email: ''
};

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_USER:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}
