//Reducer to handle all messages-related actions
import types from '../Actions/types';

const DEFAULT_MESSAGES = { items: [] };

const messagesReducer = ( state = DEFAULT_MESSAGES , action) => {
  switch(action.type) {
    case types.NEW_MESSAGE:
      return { ...state , items: [...state.items , action.item ] };
    default:
      return state;
  }
}

export default messagesReducer;

