import types from './types';
import uuid from 'uuid/v4';

export const newMessage = text => ({
  type: types.NEW_MESSAGE,
  item: { text , timeStamp: Date.now() , id: uuid() }
});

