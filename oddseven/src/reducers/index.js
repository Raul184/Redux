
//Settings
const DEFAULT_SETTINGS= {
  gameStarted: false,
  instructionsExpanded: false
}

//Root reducer
const rootReducer = ( state=DEFAULT_SETTINGS , action ) => {
  switch(action.type){
    case "SET_GAME_STARTED":
      return {
        ...state,
        gameStarted: action.gameStarted
    }
    case "SET_GAME_OFF":
      return {
        ...state,
        gameStarted: action.gameStarted
    }
    case "SET_INSTRUCTIONS_EXPANDED":
      return {
        ...state,
        instructionsExpanded: action.instructionsExpanded
    }
    case 'COLLAPSE_INSTRUCTIONS':
      return {
        ...state,
        instructionsExpanded: action.instructionsExpanded
      }
    default:
      return state;
  }
}

export default rootReducer;