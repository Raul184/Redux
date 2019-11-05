//Default reducer
import { combineReducers } from 'redux';
//Reducers
import messagesReducer from './messages';
import userNameReducer from './users';
import reactionsReducer from './reactions';

export default combineReducers({
  messages: messagesReducer ,
  userName: userNameReducer ,
  reactions: reactionsReducer
});
