export default class Pet {
     
    get nome() {
      return this._nome;
    }

    get especie() {
        return this.especie;
    }
  
    get descricao() {
      return this._descricao;
    }
  
    get imagem() {
        return this._imagem;
    }
   
    get adotado() {
        return this._adotado;
    }

    get raca() {
        return this._raca;
    }

    get idade() {
        return this._idade;
    }

    get idinstituicao() {
        return this._idinstituicao;
    }

    set nome(theNome)  {
      this._nome = theNome;
      console.log('setting nome ' + this._nome);
    }
 
    set especie(theEspecie)  {
        this._especie = theEspecie;
        console.log('setting especie ' + this._especie);
      }

    set descricao(theDescricao)  {
        this._descricao = theDescricao;
        console.log('setting descricao ' + this._descricao);
      }
    
    set imagem(theImagem)  {
        this._imagem = theImagem;
        console.log('setting imagem ' + this._imagem);
      }

      set adotado(theAdotado)  {
        this._adotado = theAdotado;
        console.log('setting adotado ' + this._adotado);
      }

      set raca(theRaca)  {
        this._raca = theRaca;
        console.log('setting raca ' + this._raca);
      } 
      
      set idade(theIdade)  {
        this._idade = theIdade;
        console.log('setting idade ' + this._idade);
      }

      set idinstituicao(theIdInstituicao)  {
        this._idinstituicao = theIdInstituicao;
        console.log('setting instituicao ' + this._idinstituicao);
      }

  }
  