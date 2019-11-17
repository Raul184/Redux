import {
  LOGS_ERROR,
  GET_TECHS, 
  ADD_TECH,
  DELETE_TECH,
  SET_LOADING
} from './types';

//API - GET
export const getTechs = () => async dispatch => {
  try {
    const req = await fetch('/techs');
    const res = await req.json();
    setLoading();
    dispatch({
      type: GET_TECHS ,
      payload: res
    });
  } 
  catch (error) {
    dispatch({
      type: LOGS_ERROR ,
      payload: error.response.statusText
    });
  }    
};

//ADD
export const addTech = (broda) => async dispatch => {
  try {
    setLoading();
    const req = await fetch('/techs' , {
      method: 'POST',
      body: JSON.stringify(broda) ,
      headers: {
        'Content-type': 'application/json'
      }
    });
    const res = await req.json();
    
    dispatch({
      type: ADD_TECH ,
      payload: res
    });
  } 
  catch (error) {
    dispatch({
      type: LOGS_ERROR ,
      payload: error.response.statusText
    });
  }    
}
//DELETE 
export const deleteTech = (id) => async dispatch => {
  try {
    setLoading();
    // eslint-disable-next-line
    const req = await fetch(`/techs/${id}` , { method: 'DELETE' });
    
    dispatch({
      type: DELETE_TECH ,
      payload: id
    });
  } 
  catch (error) {
    dispatch({
      type: LOGS_ERROR ,
      payload: error.response.statusText
    });
  }
}

// On LOADING 
export const setLoading = () => {
  return {
    type: SET_LOADING
  }
}