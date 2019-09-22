import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { startGame , cancelGame,  expandInstructions } from './actions/actions';
import rootReducer from './reducers/index';


const store = createStore(rootReducer);

store.dispatch(startGame());
store.dispatch(cancelGame());
store.dispatch( expandInstructions());

console.log(store.getState());


store.subscribe( () => console.log(store.getState()));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider> , 
  document.getElementById('root')
);

