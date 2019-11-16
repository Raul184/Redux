import { GET_LOGS , SET_LOADING , LOGS_ERROR , ADD_LOGS , DELETE_LOGS } from '../actions/types';

const initState = {
  logs: [],
  current: null ,
  loading: false,
  error: null
}

export default ( state = initState , action ) => {
  switch (action.type) {
    case GET_LOGS:
      return {
        ...state ,
        logs: action.payload,
        loading: false
      }
    case ADD_LOGS:
      return{
        ...state ,
        logs: [ ...state.logs , action.payload ] , 
        loading: false
      }
    case DELETE_LOGS:
      return{
        ...state,
        logs: state.logs.filter( el => el.id !== action.payload),
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