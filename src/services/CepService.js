import http from "../http/http-commoncep";

const getCep = id => {
  return http.get(`/cep/${id}/json/`);
};

const CepService = {
  getCep
};


export default CepService;
