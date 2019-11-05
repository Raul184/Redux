import uuid from 'uuid';

export const createReaction = ( { type , emoji , userName , messageId }) => {
  return { 
    type , 
    item:{ 
      id: uuid() , 
      timestamp: Date.now() , 
      emoji , 
      userName , 
      messageId 
    } 
  }
};