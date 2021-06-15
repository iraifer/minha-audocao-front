/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createDataPessoa } from "../../actions/pessoaActions";
 
import axios from 'axios';

import logo from '../../images/cat_logo.jpg';
import '../Bootstrap/bootstrap-css.css';
import '../Nicepage/nicepage.css';

const Cadastro = () => {

  const initialPessoaState = {
    idPessoa: null,
    nome: "",
    sobrenome: "",
    email: "",
    imagem: "",
    senha: ""
  };

  const [cep, setCep] = useState({ cep: '' });

  const getInformacoes = () => {
    axios.get('http://viacep.com.br/ws/' + cep + '/json/')
        .then(response => {
            document.getElementById('bairro').value = response.data['bairro'];
            document.getElementById('rua').value = response.data['logradouro'];
            document.getElementById('cidade').value = response.data['localidade'];
            document.getElementById('estado').value = response.data['uf'];
    });
    
}

const handlingCep = (e) => {
  setCep(e.target.value);
}

  const [pessoa, setPessoa] = useState(initialPessoaState);

  const dispatch = useDispatch();

  const handleInputChange = event => {
    const { name, value } = event.target;
    setPessoa({ ...pessoa, [name]: value });
  };

  
  const savePessoa = () => {
    
    const { idPessoa, nome, sobrenome, email, imagem, senha } = pessoa;
    
    dispatch(createDataPessoa(idPessoa, nome, sobrenome, email, imagem, senha))
      .then(data => {
        setPessoa({
          idPessoa: data.idPessoa,
          nome: data.nome,
          sobrenome: data.sobrenome,
          email: data.email,
          imagem: data.imagem,
          senha: data.senha
        });
      })
      .catch(e => {
        alert("Error " + e);
      });
  };

  const newPessoa = () => {
    setPessoa(initialPessoaState);
  };

  return (
    <section class="u-align-center u-border-2 u-border-grey-75 u-clearfix u-custom-color-12 u-section-1" id="carousel_1766">
    <body class="u-body">
    <form onLoad = {newPessoa} class="form-horizontal">
    <fieldset>
    <div class="panel panel-primary">
        <div class="panel-heading u-custom-font u-font-lobster u-label u-label-2">Criação de conta 
      <img img src={logo} width="90" height="90"/> 
       </div>
         <div class="panel-body">
    <div class="form-group">
    <div class="col-md-11 control-label">
            <p class="help-block u-custom-font u-font-lobster u-label u-label-2" ><h11>*</h11> Campo Obrigatório </p>
    </div>
    </div>
    
    <div class="form-group">
      <label class="col-md-2 control-label u-custom-font u-font-lobster u-label u-label-2" for="Estado Civil">Tipo de Pessoa<h11>*</h11></label>
      <div class="col-md-2">
        <select required id="Estado Civil" name="Estado Civil" class="form-control u-custom-font u-font-lobster u-label u-label-2">
            <option value=""></option>
          <option value="instituicao">Instituição</option>
          <option value="pessoafisica">Pessoa fisica</option> 
        </select>
      </div>
        <label class="col-md-2 control-label u-custom-font u-font-lobster u-label u-label-2" for="Nome">Documento <h11>*</h11></label>  
      <div class="col-md-2">
      <input id="document" name="document" placeholder="Apenas números" class="form-control input-md u-custom-font u-font-lobster u-label u-label-2" required="" type="text" maxlength="14" pattern="[0-9]+$"/>
      </div>
    </div>
      
    <div class="form-group">
      <label class="col-md-2 control-label u-custom-font u-font-lobster u-label u-label-2" for="Nome">Nome <h11>*</h11></label>  
      <div class="col-md-8">
      <input id="nome" name="nome" placeholder="Digite seu nome ou nome da sua instituicao" class="form-control input-md u-custom-font u-font-lobster u-label u-label-2" required="" type="text" onChange={handleInputChange}/>
      </div>
    </div>
    
    <div class="form-group">
      <label class="col-md-2 control-label u-custom-font u-font-lobster u-label u-label-2" for="telefone">Telefone <h11>*</h11></label>
      <div class="col-md-2">
        <div class="input-group">
          <span class="input-group-addon u-custom-font u-font-lobster u-label u-label-2"><i class="glyphicon glyphicon-earphone"></i></span>
          <input id="telefone" name="telefone" class="form-control u-custom-font u-font-lobster u-label u-label-2" placeholder="XX XXXXX-XXXX" required="" type="text" maxlength="13" pattern="\[0-9]{2}\ [0-9]{4,6}-[0-9]{3,4}$"
          OnKeyPress="formatar('## #####-####', this)"/>
        </div>
      </div>
      
        <label class="col-md-1 control-label u-custom-font u-font-lobster u-label u-label-2" for="email">Email<h11>*</h11></label>
         <div class="col-md-4">
        <div class="input-group">
         <span class="input-group-addon u-custom-font u-font-lobster u-label u-label-2"><i class="glyphicon glyphicon-envelope"></i></span>
          <input id="email" name="email" class="form-control u-custom-font u-font-lobster u-label u-label-2" placeholder="email@email.com" required="" type="text" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" onChange={handleInputChange}/>
          </div>
      </div>
     </div> 
    
    <div class="form-group">
      <label class="col-md-2 control-label u-custom-font u-font-lobster u-label u-label-2" for="CEP">CEP <h11>*</h11></label>  
      <div class="col-md-2">
      <input id="cep" name="cep" placeholder="Apenas números" class="form-control input-md u-custom-font u-font-lobster u-label u-label-2" required="" type="search" maxlength="8" pattern="[0-9]+$" onChange={ (e) => { handlingCep(e) }} />
      </div>
      <div class="col-md-2">
        <button type="button" class="btn btn-primary u-custom-font u-font-lobster u-label u-label-2"  onClick={ getInformacoes }>Pesquisar</button>
        </div>
    </div>
    
    <div class="form-group">
      <label class="col-md-2 control-label u-custom-font u-font-lobster u-label u-label-2" for="prependedtext">Endereço</label>
      <div class="col-md-4">
        <div class="input-group">
          <span class="input-group-addon u-custom-font u-font-lobster u-label u-label-2">Rua</span>
          <input id="rua" name="rua" class="form-control u-custom-font u-font-lobster u-label u-label-2" placeholder="" required="" readonly="readonly" type="text"/>
        </div>
        
      </div>
        <div class="col-md-2">
        <div class="input-group">
          <span class="input-group-addon u-custom-font u-font-lobster u-label u-label-2">Nº <h11>*</h11></span>
          <input id="numero" name="numero" class="form-control u-custom-font u-font-lobster u-label u-label-2" placeholder="" required=""  type="text"/>
        </div>
        
      </div>
      
      <div class="col-md-3">
        <div class="input-group">
          <span class="input-group-addon u-custom-font u-font-lobster u-label u-label-2">Bairro</span>
          <input id="bairro" name="bairro" class="form-control u-custom-font u-font-lobster u-label u-label-2" placeholder="" required="" readonly="readonly" type="text"/>
        </div>
        
      </div>
    </div>
    
    <div class="form-group">
      <label class="col-md-2 control-label" for="prependedtext"></label>
      <div class="col-md-4">
        <div class="input-group">
          <span class="input-group-addon u-custom-font u-font-lobster u-label u-label-2">Cidade</span>
          <input id="cidade" name="cidade" class="form-control u-custom-font u-font-lobster u-label u-label-2" placeholder="" required=""  readonly="readonly" type="text"/>
        </div>
        
      </div>
      
       <div class="col-md-2">
        <div class="input-group">
          <span class="input-group-addon u-custom-font u-font-lobster u-label u-label-2">Estado</span>
          <input id="estado" name="estado" class="form-control u-custom-font u-font-lobster u-label u-label-2" placeholder="" required=""  readonly="readonly" type="text"/>
        </div>
        
      </div>
    </div>
     
    <div class="form-group">
        
      <label class="col-md-2 control-label u-custom-font u-font-lobster u-label u-label-2" for="selectbasic">Senha <h11>*</h11></label>
      
      <div class="col-md-3">
       <input id="senha" name="senha" type="password" placeholder="Crie uma senha para sua conta" class="form-control input-md u-custom-font u-font-lobster u-label u-label-2" required=""/>
      
      </div>
    
      <label class="col-md-1 control-label u-custom-font u-font-lobster u-label u-label-2" for="senha">Confirmação de Senha<h11>*</h11></label>  
      <div class="col-md-3">
      <input id="senha" name="senha" type="password" placeholder="Repita a senha desejada" class="form-control input-md u-custom-font u-font-lobster u-label u-label-2" required="" onChange={handleInputChange}/>
        
      </div>
    </div>
     
     
    <div class="form-group">
      <label class="col-md-2 control-label" for="Cadastrar"></label>
      <div class="col-md-8">
        <button id="Cadastrar" name="Cadastrar" class="btn btn-success u-custom-font u-font-lobster u-label u-label-2" type="Submit" onClick={savePessoa}>Cadastrar</button>
        <button id="Cancelar" name="Cancelar" class="btn btn-danger u-custom-font u-font-lobster u-label u-label-2" type="Reset">Cancelar</button>
      </div>
    </div>
    
    </div>
    </div>
    
    
    </fieldset>
    </form>
    </body>
    </section>
    );

}

export default Cadastro;