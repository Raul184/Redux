import types from './types';
import uuid from 'uuid/v4';

export const newMessage = ({ text , userName }) => ({
  type: types.NEW_MESSAGE,
  item: { id: uuid() , timeStamp: Date.now() ,text , userName  }
});

