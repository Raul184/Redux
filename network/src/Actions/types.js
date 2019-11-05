const types = {
  NEW_MESSAGE : 'NEW_MESSAGE',
  SET_USER_NAME : 'SET_USER_NAME'
}

export default types;

export const REACTION_OBJECTS = [
  {
    type: 'REACTION_LOVE' ,
    emoji: '❤️' 
  },
  {
    type: 'REACTION_LIKE' ,
    emoji: '👍'
  },
  {
    type: 'REACTION_DISLIKE' ,
    emoji: '👎'
  },
  {
    type: 'REACTION_LAUGH' ,
    emoji: '😊'
  }
]