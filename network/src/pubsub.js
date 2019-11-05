import PubNub from 'pubnub';
//Config for PubNub
import pubnubConfig from './pubNub.config';
import { createContext } from 'react';
//Channel creation
export const MESSAGE_CHANNEL = 'MESSAGE_CHANNEL';
//PubSub Class for instances to automatically get 


export class PubSub {
  constructor(){
    //pubSub servers
    this.pubnub = new PubNub( pubnubConfig );
    //get plugged into channel (Subscribed)
    this.pubnub.subscribe({ channels: [MESSAGE_CHANNEL] });
  }

  // Generic addListener for PubNub
  addListener = listenerConfig => {
    this.pubnub.addListener(listenerConfig);
  }

  publish = message => {
    this.pubnub.publish({ message , channel: MESSAGE_CHANNEL });
  }
}

export const PubSubContext = createContext();
