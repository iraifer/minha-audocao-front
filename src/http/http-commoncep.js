import axios from "axios";

export default axios.create({
  baseURL: "http://viacep.com.br/ws/",
  headers: {
    "Content-type": "application/json"
  }
});