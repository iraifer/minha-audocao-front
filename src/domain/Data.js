export default class Data {
     
    get idevento() {
      return this._idevento;
    }
  
    get data() {
      return this._data;
    }

    get hora_inicio() {
        return this._hora_inicio;
      }

    get hora_fim() {
        return this._hora_fim;
      }
   
    set idevento(theIdEvento)  {
      this._idevento = theIdEvento;
      console.log('setting idevento ' + this._idevento);
    }
 
    set data(theData)  {
        this._data = theData;
        console.log('setting data ' + this._data);
      }

      set hora_inicio(theHora_inicio)  {
        this._hora_inicio = theHora_inicio;
        console.log('setting hora_inicio ' + this._hora_inicio);
      }

      set hora_fim(theHora_fim)  {
        this._hora_fim = theHora_fim;
        console.log('setting hora_fim ' + this._hora_fim);
      }

  }
  