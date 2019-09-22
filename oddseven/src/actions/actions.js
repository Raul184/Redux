import types from './types';

//Action Creators
// ON/OFF
const startGame = () => {
  return { gameStarted: true , type: types.set_game_started};
}
const cancelGame = () => {
  return { gameStarted: false , type: types.set_game_off};
}
const expandInstructions = () => {
  return { type: types.instructions , instructionsExpanded: true}
}
const collapseInstructions = () => {
  return { type: types.instructionsOff , instructionsExpanded: false}
}


export { startGame , cancelGame , expandInstructions , collapseInstructions};