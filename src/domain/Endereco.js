export default class Endereco {
     
    get cidade() {
      return this._cidade;
    }
  
    get estado() {
      return this._estado;
    }
  
    get logradouro() {
      return this._logradouro;
    }

    get numero() {
        return this._numero;
      }

      get cep() {
        return this._cep;
      }
   
    set cidade(theCidade)  {
      this._cidade = theCidade;
      console.log('setting cidade ' + this._cidade);
    }
 
    set estado(theEstado)  {
        this._estado = theEstado;
        console.log('setting estado ' + this._estado);
      }
    
      set logradouro(theLogradouro)  {
        this._logradouro = theLogradouro;
        console.log('setting logradouro ' + this._logradouro);
      }

      set numero(theNumero)  {
        this._numero = theNumero;
        console.log('setting numero ' + this._numero);
      }
 
      set cep(theCep)  {
        this._cep = theCep;
        console.log('setting cep ' + this._cep);
      }

  }
  