import { combineReducers } from 'redux';
import { userReducer, logInReducer } from './userReducer';

const rootReducer = combineReducers({
  user: userReducer,
  loggedIn: logInReducer
});

export default rootReducer;
