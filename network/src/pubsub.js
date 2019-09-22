import PubNub from 'pubnub';
//Config for PubNub
import pubnubConfig from './pubNub.config';

//Instance

const pubnub = new PubNub( pubnubConfig );

//Channel creation
export const MESSAGE_CHANNEL = 'MESSAGE_CHANNEL';

//Link pubnub to channel  Subscriber
pubnub.subscribe({ channels: [MESSAGE_CHANNEL] });

//On listen For Messages on MESSAGE_CHANNEL
pubnub.addListener({
  message: messageObj => {
    console.log('messageObj' , messageObj);
  }
});

setTimeout( () => {
  // Publisher
  pubnub.publish({
  message: 'foo',
  channel: MESSAGE_CHANNEL
  });
} , 1000);

