export default class Pessoa {
     
    get nome() {
      return this._nome;
    }
  
    get sobrenome() {
      return this._sobrenome;
    }
  
    get email() {
      return this._email;
    }

    get senha() {
        return this._senha;
      }

      get imagem() {
        return this._imagem;
      }
   
    set nome(theNome)  {
      this._nome = theNome;
      console.log('setting nome ' + this._nome);
    }
 
    set sobrenome(theSobrenome)  {
        this._sobrenome = theSobrenome;
        console.log('setting sobrenome ' + this._sobrenome);
      }
    
      set email(theEmail)  {
        this._email = theEmail;
        console.log('setting email ' + this._email);
      }

      set senha(theSenha)  {
        this._senha = theSenha;
        console.log('setting senha ' + this._senha);
      }
 
      set imagem(theImagem)  {
        this._imagem = theImagem;
        console.log('setting imagem ' + this._imagem);
      }

  }
  