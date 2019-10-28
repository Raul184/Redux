import {types} from '../actions/Types';

//Init Store state
const init = {
  gameStarted: false ,
  instructionsExpanded: false
}

const rootReducer = (state = init , action) => {
  switch (action.type) {
    case types.SET_GAME_STARTED:
      return {
        ...state,
        gameStarted: action.gameStarted
      }  
    case types.SET_GAME_FINISHED:
      return {
        ...state,
        gameStarted: action.gameStarted,
      }
    case types.SET_INSTRUCTIONS_EXPANDED:
      return {
        ...state,
        instructionsExpanded: action.instructionsExpanded
      }
    case types.SET_INSTRUCTIONS_COLLAPSED:
      return {
        ...state,
        instructionsExpanded: action.instructionsExpanded
      }    
    default:
      return state;
  }
}

export default rootReducer;