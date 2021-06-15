import {
    CREATE_PESSOA,
    RETRIEVE_PESSOA,
    UPDATE_PESSOA,
    DELETE_PESSOA
  } from "./types";
  
  import PessoaDataService from "../services/PessoaService";
  
  export const createDataPessoa = (idPessoa, nome, sobrenome, email, imagem, senha) => async (dispatch) => {
    try {
      const res = await PessoaDataService.createPessoa({ idPessoa, nome, sobrenome, email, imagem, senha });
  
      dispatch({
        type: CREATE_PESSOA,
        payload: res.data,
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };
  
  export const retrievePessoa = () => async (dispatch) => {
    try {
      const res = await PessoaDataService.getAll();
  
      dispatch({
        type: RETRIEVE_PESSOA,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
  
  export const updatePessoa = (idPessoa, data) => async (dispatch) => {
    try {
      const res = await PessoaDataService.update(idPessoa, data);
  
      dispatch({
        type: UPDATE_PESSOA,
        payload: data,
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };
  
  export const deletePessoa = (idPessoa) => async (dispatch) => {
    try {
      await PessoaDataService.remove(idPessoa);
  
      dispatch({
        type: DELETE_PESSOA,
        payload: { idPessoa },
      });
    } catch (err) {
      console.log(err);
    }
  };
  