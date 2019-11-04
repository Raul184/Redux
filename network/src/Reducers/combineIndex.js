//Default reducer
import { combineReducers } from 'redux';
//Reducers
import messagesReducer from './messages';
import userNameReducer from './users';

export default combineReducers({
  messages: messagesReducer ,
  userName: userNameReducer
});
