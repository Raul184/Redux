import {types} from './Types';

//Actions
export const startGame = () => { 
  return { type: types.SET_GAME_STARTED , gameStarted: true }
};
export const cancelGame = () => { 
  return {type: types.SET_GAME_FINISHED , gameStarted: false }
};
export const expandInstructions = () => { 
  return {type: types.SET_INSTRUCTIONS_EXPANDED , instructionsExpanded: true }
};
export const cancelInstructions = () => { 
  return { type: types.SET_INSTRUCTIONS_COLLAPSED , instructionsExpanded: false }
};
//api helpers ==================================
export const fetchDeckSuccess = deckJson => {
  const {remaining , deck_id } = deckJson;
  return { type: types.FETCH_DECK , remaining , deck_id , grab: true }
}
export const fetchDeckError = error => {
  return {type: types.FETCH_DECK_ERROR , msg: error.message , notGrab: false}
}
//  ==================================
export const processNueDeck = () => async dispatch => {
  try {
    let req = await fetch(`${process.env.REACT_APP_API_URL}/deck/new/shuffle`);
    req = await req.json();
    console.log(req);
  //fetch Deck reducer
    return dispatch(fetchDeckSuccess(req));  
  } 
  catch (error) {
    return dispatch(fetchDeckError(error));
  }
}
// ==================================
export const drawACard = deck_id => async dispatch => {
  try {
    let req = await fetch(`${process.env.REACT_APP_API_URL}/deck/${deck_id}/draw`);
    req = await req.json();
    
    return dispatch({
      type: types.DRAW_CARD ,
      cards: req.cards,
      remaining: req.remaining,
      grab: true
    });
  } 
  catch (error) {
    // return dispatch(fetchDeckError(error));
    console.log(error.message);
  }
}
