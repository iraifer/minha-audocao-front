export default class Formulario {
     
    get nome() {
      return this._nome;
    }
  
    get tipo() {
      return this._tipo;
    }
  
    get obrigatorio() {
      return this._obrigatorio;
    }

    get ordem() {
        return this._ordem;
      }

      get idinstituicao() {
        return this._idinstituicao;
      }
   
    set nome(theNome)  {
      this._nome = theNome;
      console.log('setting nome ' + this._nome);
    }
 
    set tipo(theTipo)  {
        this._tipo = theTipo;
        console.log('setting tipo ' + this._tipo);
      }
    
      set obrigatorio(theObrigatorio)  {
        this._obrigatorio = theObrigatorio;
        console.log('setting obrigatorio ' + this._obrigatorio);
      }

      set ordem(theOrdem)  {
        this._ordem = theOrdem;
        console.log('setting ordem ' + this._ordem);
      }
 
      set idinstituicao(theIdInstituicao)  {
        this._idinstituicao = theIdInstituicao;
        console.log('setting idinstituicao ' + this._idinstituicao);
      }

  }
  