export default class Evento {
     
    get nome() {
      return this._nome;
    }
  
    get descricao() {
      return this._descricao;
    }

    get idinstituicao() {
        return this._idinstituicao;
      }

    get idendereco() {
        return this._idendereco;
      }
   
    set nome(theNome)  {
      this._nome = theNome;
      console.log('setting nome ' + this._nome);
    }
 
    set descricao(theDescricao)  {
        this._descricao = theDescricao;
        console.log('setting descricao ' + this._descricao);
      }

      set idinstituicao(theIdInstituicao)  {
        this._idinstituicao = theIdInstituicao;
        console.log('setting idinstituicao ' + this._idinstituicao);
      }

      set idendereco(theIdEndereco)  {
        this._idendereco = theIdEndereco;
        console.log('setting idendereco ' + this._idendereco);
      }

  }
  