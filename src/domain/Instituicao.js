export default class Instituicao {
     
    get nome() {
      return this._nome;
    }
  
    get descricao() {
      return this._descricao;
    }
  
    get email() {
      return this._email;
    }

    get senha() {
        return this._senha;
      }

      get telefone() {
        return this._telefone;
      }

    get imagem() {
        return this._imagem;
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
    
      set email(theEmail)  {
        this._email = theEmail;
        console.log('setting email ' + this._email);
      }

      set senha(theSenha)  {
        this._senha = theSenha;
        console.log('setting senha ' + this._senha);
      }
 
      set telefone(theTelefone)  {
        this._telefone = theTelefone;
        console.log('setting telefone ' + this._telefone);
      }

      set imagem(theImagem)  {
        this._imagem = theImagem;
        console.log('setting imagem ' + this._imagem);
      }

      set idendereco(theIdEndereco)  {
        this._idendereco = theIdEndereco;
        console.log('setting idendereco ' + this._idendereco);
      }

  }
  