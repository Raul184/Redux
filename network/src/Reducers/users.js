//Reducer to handle all messages-related actions
import types from '../Actions/types';

const DEFAULT_USER_NAME = { userName: '' };

const userNameReducer = ( state = DEFAULT_USER_NAME , action) => {
  switch(action.type) {
    case types.SET_USER_NAME:
      return action.userName ;
    default:
      return state;
  }
}

export default userNameReducer;

