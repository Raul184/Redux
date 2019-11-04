import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//Redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
//reducers
import rootReducer from './Reducers/combineIndex';
//PubSub Class for connect() between PubNub channel arquitec. and Redux
import PubSub from './pubsub';
import {newMessage} from './Actions/messages';

//App Store
const store = createStore(rootReducer);

 // 1. Initial state
console.log('store.getState()' , store.getState());
// 2. After every update
store.subscribe( () => console.log('State Status' , store.getState()));

//Instantiate it
const pubsub = new PubSub();

pubsub.addListener({
  message: messageObj => {
    const { message , channel } = messageObj;
    console.log('Received msg' , message , 'channel: ' , channel);

    //Send it as An Action Obj to redux Reducers
    store.dispatch(message);
  } 
})

setTimeout( () => {
  pubsub.publish(newMessage('Hello world'));
}, 1000 );


ReactDOM.render(
  <Provider store={store}>
    <App /> 
  </Provider> , 
  document.getElementById('root')
);
