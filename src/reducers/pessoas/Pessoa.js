import {
    CREATE_PESSOA,
    RETRIEVE_PESSOA,
    UPDATE_PESSOA,
    DELETE_PESSOA
  } from "../../actions/types";
  
  const initialState = [];
  
  const pessoaReducer = (pessoas = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case CREATE_PESSOA:
        return [...pessoas, payload];
  
      case RETRIEVE_PESSOA:
        return payload;
  
      case UPDATE_PESSOA:
        return pessoas.map((tutorial) => {
          if (pessoas.id === payload.id) {
            return {
              ...pessoas,
              ...payload,
            };
          } else {
            return pessoas;
          }
        });
  
      case DELETE_PESSOA:
        return pessoas.filter(({ id }) => id !== payload.id);
  
      default:
        return pessoas;
    }
  };
  
  export default pessoaReducer;