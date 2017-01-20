// @flow
import {
} from '../actions/user';

const INITIAL_STATE = {
  user: null
};

console.log(INITIAL_STATE.devices);

export default function status(state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state;
  }
}
