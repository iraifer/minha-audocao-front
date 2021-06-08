import HttpUtil from '../http/HttpUtil.js';

export default class PessoaDriver {
  constructor() {
    this.xhr = new HttpUtil();
    this.get = new Proxy(this.xhr.get, {
      apply: function(target, thisArg, args) {
        console.log('target');
        console.log(target);
        console.log('thisArg');
        console.log(thisArg);
        console.log('args');
        console.log(args);
        console.log('chamando...');
        return target(...args);
      }
    });
  }

  /**
   * 
   * @param {Person} person 
   */
  async add(person) {
    console.log("Informção ->" + person);
    const response = await this.xhr
      .post('http://localhost:8080', '/api/pessoa/add', person);

    return await response.json();
  }
}
