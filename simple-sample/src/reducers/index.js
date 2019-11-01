import {types} from '../actions/Types';

//Init Store state
const init = {
  gameStarted: false ,
  instructionsExpanded: false,
  cards: []
}

const rootReducer = (state = init , action) => {
  let remaining , deck_id , cards ,grab;
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
    case types.FETCH_DECK:
      ({ remaining , deck_id , grab  } = action);
      return {
        ...state,
        remaining,
        deck_id,
        grab
      } 
    case types.FETCH_DECK_ERROR:
      const { notGrab } = action;
      return{
        ...state,
        notGrab,
        error: action.msg,
      }
    case types.DRAW_CARD:
      ({cards , remaining , grab} = action);
      return {
        ...state,
        cards,
        remaining,
        grab
      }   
    default:
      return state;
  }
}

export default rootReducer;