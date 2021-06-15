import http from "../http/http-common";


const getPessoaAll = () => {
  return http.get("/pessoa/all");
};

const getPessoa = id => {
  return http.get(`/pessoa/${id}`);
};

const createPessoa = data => {
  return http.post("/pessoa/add", data); 
};

const updatePessoa = (id, data) => {
  return http.put(`/pessoa/${id}`, data);
};

const removePessoa = id => {
  return http.delete(`/pessoa/${id}`);
};

const PessoaService = {
  getPessoaAll,
  getPessoa,
  createPessoa,
  updatePessoa,
  removePessoa
};

export default PessoaService;
