import {
    RETRIEVE_CEP
  } from "./types";
  
  import CepDataService from "../services/CepService";
  
  export const retrieveCep = (cep) => async (dispatch) => {
    try {
      const res = await CepDataService.getCep(cep);
  
      dispatch({
        type: RETRIEVE_CEP,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
  
  