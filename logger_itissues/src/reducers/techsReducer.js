import { SET_LOADING , LOGS_ERROR , GET_TECHS , ADD_TECH , DELETE_TECH } from '../actions/types';

const initState = {
  techList: [],
  // current: null ,
  loading: false,
  error: null
}

export default ( state=initState , action ) => {
  switch (action.type) {
    case GET_TECHS:
      return {
        ...state ,
        techList: action.payload 
      }
    case ADD_TECH:
      return {
        ...state ,
        techList: [ ...state.techList , action.payload ],
        loading: false
      }
    case DELETE_TECH:
      return {
        ...state ,
        techList: state.techList.filter( el => el.id !== action.payload ),
        loading: false
      }
    case SET_LOADING:
      return {
        ...state , 
        loading: true
      }
    case LOGS_ERROR:
      console.log(action.payload);
      return {
        ...state ,
        error: action.payload
      }
    default:
      return state;
  }
}