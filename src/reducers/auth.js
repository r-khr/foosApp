import * as types from '../actions/actionTypes';
import * as actions from '../actions/auth';

var initialState = {
  captured:false,
  count: 0
};

export function SnapChat(state = initialState, action = {}){
  switch(action.type){
    case types.LOGIN:
      return {
        ...state,
      };
    case types.CLOSE:
      console.log("2");
      return {
        ...state,
        captured: false
      };
    default:
      return state;
  }
}