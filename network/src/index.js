import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//Redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
//reducers
import rootReducer from './Reducers';
//PubNub
import './pubsub';


//App Store
const store = createStore(rootReducer);

//For debugging 

// 1. Initial state
console.log('store.getState()' , store.getState());
// 2. After every update
store.subscribe( () => console.log('store.getState()' , store.getState()));


ReactDOM.render(
  <Provider store={store}>
    <App /> 
  </Provider> , 
  document.getElementById('root')
);
