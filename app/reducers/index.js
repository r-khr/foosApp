import { combineReducers } from 'redux';
import user from './user';
import games from './games';
import play from './play';

const rootReducer = combineReducers({
  user,
  games,
  play
});

export default rootReducer;
