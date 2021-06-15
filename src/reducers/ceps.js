import {
    RETRIEVE_CEP,
    RETRIEVE_ALL_CEP
  } from "../actions/types";
  
  const initialState = [];
  
  const cepReducer = (ceps = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {

      case RETRIEVE_CEP:
        return payload;

      case RETRIEVE_ALL_CEP:
          return payload;  
      
      default:
        return ceps;
    }
  };
  
  export default cepReducer;