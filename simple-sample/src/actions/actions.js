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
