export default class PessoaController {
    constructor() {
      this.pessoaDriver = null;
    }
  
    async prepare() {
      if (!this.pessoaDriver) {
        const { default: PessoaDriver } = await import('../drivers/PessoaDriver');
        this.pessoaDriver = new PessoaDriver();
      }
      return this;
    }
   
    async add(person) {
      const instance = await this.prepare();
      return instance
        .pessoaDriver
        .add(person);
    }
  }
  