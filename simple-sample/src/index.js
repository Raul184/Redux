import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//Redux
import { createStore } from 'redux';
import rootReducer from './reducers/index';
import { startGame , cancelGame , expandInstructions , cancelInstructions } from './actions/actions';


//Store
const store = createStore(rootReducer);

store.subscribe(() => console.log('state status' ,store.getState()));


store.dispatch(startGame());
store.dispatch(expandInstructions());

store.dispatch(cancelGame());
store.dispatch(cancelInstructions());

ReactDOM.render(
  <App />, 
  document.getElementById('root')
);

