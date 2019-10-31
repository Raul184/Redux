import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//Redux
import { createStore , applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index';
// import { startGame , cancelGame , expandInstructions , cancelInstructions } from './actions/actions';
import thunk from 'redux-thunk';

//Store
const store = createStore(rootReducer , applyMiddleware(thunk));

store.subscribe(() => console.log('state status' ,store.getState()));


// store.dispatch(startGame());
// store.dispatch(expandInstructions());
// store.dispatch(cancelGame());
// store.dispatch(cancelInstructions());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider> ,
  document.getElementById('root')
);

