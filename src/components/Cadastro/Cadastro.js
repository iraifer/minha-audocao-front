import '../Nicepage/nicepage.css';
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createPessoa } from "../../actions/pessoaActions";

function Cadastro () {

  const initialPessoaState = {
    idPessoa: null,
    nome: "",
    sobrenome: "",
    email: "",
    imagem: "",
    senha: ""
  };

  const [pessoa, setPessoa] = useState(initialPessoaState);
  const [submitted, setSubmitted] = useState(false);

  const dispatch = useDispatch();

  const handleInputChange = event => {
    const { name, value } = event.target;
    setPessoa({ ...pessoa, [name]: value });
  };

  const saveTutorial = () => {
    const { idPessoa, nome, sobrenome, email, imagem, senha } = pessoa;

    dispatch(createPessoa(idPessoa, nome, sobrenome, email, imagem, senha))
      .then(data => {
        setPessoa({
          idPessoa: data.idPessoa,
          nome: data.nome,
          sobrenome: data.sobrenome,
          email: data.email,
          imagem: data.imagem,
          senha: data.senha
        });
        setSubmitted(true);

        console.log(data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newPessoa = () => {
    setPessoa(initialPessoaState);
    setSubmitted(false);
  };

  return (
      <body class="u-body">
        <section class="u-align-center u-border-2 u-border-grey-75 u-clearfix u-custom-color-12 u-section-1" id="carousel_1766">
        <div class="u-clearfix u-sheet u-sheet-1">
        <h2 class="u-align-center u-custom-font u-font-lobster u-text u-text-white u-text-1">Crie sua conta </h2>

          <div class="u-container-style u-group u-radius-50 u-shape-round u-white u-group-1">
            <div class="u-container-layout u-valign-middle u-container-layout-1">
              <div class="u-align-center u-form u-form-1">
                <form action="#" method="POST" class="u-clearfix u-form-spacing-2 u-form-vertical u-inner-form"  source="custom" name="form">
                  <div class="u-form-group u-form-partition-factor-2 u-form-select u-form-group-1">
                    <label for="select-8e9d" class="u-custom-font u-font-lobster u-label u-label-1">Tipo de pessoa</label>
                    <div class="u-form-select-wrapper">
                      <select id="select-8e9d" name="select" class="u-border-1 u-border-custom-color-11 u-border-no-left u-border-no-right u-border-no-top u-custom-font u-font-lobster u-input u-input-rectangle u-input-1">
                        <option value="Pessoa Fisica">Pessoa Fisica</option>
                        <option value="Instituicao">Instituicao</option>
                      </select>
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" version="1" class="u-caret"><path fill="currentColor" d="M4 8L0 4h8z"></path></svg>
                    </div>
                  </div>
                  <div class="u-form-group u-form-partition-factor-2 u-form-group-2">
                    <label for="phone-447e" class="u-custom-font u-font-lobster u-label u-label-2">Documento</label>
                    <input type="text" placeholder="Digite seu cpf ou cnpj" pattern="\+?\d{0,2}[\s\(\-]?([0-9]{3})[\s\)\-]?([\s\-]?)([0-9]{3})[\s\-]?([0-9]{2})[\s\-]?([0-9]{2})" id="phone-447e" name="document-1" class="u-border-1 u-border-custom-color-11 u-border-no-left u-border-no-right u-border-no-top u-custom-font u-font-lobster u-input u-input-rectangle u-input-2" required="required" ></input>
                  </div>
                  <div class="u-form-group u-form-name u-form-group-3">
                    <label for="name-f2a8" class="u-custom-font u-font-lobster u-label u-label-3">Nome</label>
                    <input type="text" placeholder="Entre com o seu nome" id="name-f2a8" name="nome" class="u-border-1 u-border-custom-color-11 u-border-no-left u-border-no-right u-border-no-top u-custom-font u-font-lobster u-input u-input-rectangle u-input-3" required="" ></input>
                  </div>
                  <div class="u-form-group u-form-name u-form-group-3">
                    <label for="name-f2a8" class="u-custom-font u-font-lobster u-label u-label-3">Sobrenome</label>
                    <input type="text" placeholder="Entre com o seu sobrenome" id="name-f2a8" name="sobrenome" class="u-border-1 u-border-custom-color-11 u-border-no-left u-border-no-right u-border-no-top u-custom-font u-font-lobster u-input u-input-rectangle u-input-3" required="" ></input>
                  </div>
                  <div class="u-form-group u-form-partition-factor-3 u-form-phone u-form-group-6">
                    <label for="phone-215a" class="u-custom-font u-font-lobster u-label u-label-6">Telefone</label>
                    <input type="text" pattern="\+?\d{0,3}[\s\(\-]?([0-9]{2,3})[\s\)\-]?([\s\-]?)([0-9]{3})[\s\-]?([0-9]{2})[\s\-]?([0-9]{2})" placeholder="Insira seu telefone" id="phone-215a" name="telefone" class="u-border-1 u-border-custom-color-11 u-border-no-left u-border-no-right u-border-no-top u-custom-font u-font-lobster u-input u-input-rectangle u-input-6" required=""></input>
                  </div> 
                  <div class="u-form-group u-form-partition-factor-2 u-form-group-2">
                    <label for="email-f2a8" class="u-custom-font u-font-lobster u-label u-label-4">E-mail</label>
                    <input type="text" placeholder="Entre com seu email" id="email-f2a8" name="email" class="u-border-1 u-border-custom-color-11 u-border-no-left u-border-no-right u-border-no-top u-custom-font u-font-lobster u-input u-input-rectangle u-input-2" required="" ></input>
                  </div>
                  <div class="u-form-group u-form-name u-form-group-3">
                    <label for="name-f2a8" class="u-custom-font u-font-lobster u-label u-label-3">Logradouro</label>
                    <input type="text" placeholder="Entre com o seu Logradouro" id="message-f2a8" name="logradouro" class="u-border-1 u-border-custom-color-11 u-border-no-left u-border-no-right u-border-no-top u-custom-font u-font-lobster u-input u-input-rectangle u-input-3" required="required" ></input>
                  </div>
                  <div class="u-form-group u-form-partition-factor-3 u-form-group-8">
                    <label for="text-be7a" class="u-custom-font u-font-lobster u-label u-label-8">Numero</label>
                    <input type="text" placeholder="Entre com o seu numero" id="text-be7a" name="numero" class="u-border-1 u-border-custom-color-11 u-border-no-left u-border-no-right u-border-no-top u-custom-font u-font-lobster u-input u-input-rectangle u-input-8"></input>
                  </div>
                  <div class="u-form-group u-form-partition-factor-3 u-form-group-10">
                    <label for="text-49db" class="u-custom-font u-font-lobster u-label u-label-10">Bairro</label>
                    <input type="text" placeholder="Entre com o seu bairro" id="text-49db" name="bairro" class="u-border-1 u-border-custom-color-11 u-border-no-left u-border-no-right u-border-no-top u-custom-font u-font-lobster u-input u-input-rectangle u-input-10" required="required"></input>
                  </div>
                  <div class="u-form-group u-form-partition-factor-3 u-form-group-10">
                    <label for="address-de88" class="u-custom-font u-font-lobster u-label u-label-10">Cep</label>
                    <input type="text" placeholder="Entre com o cep" id="address-de88" name="cep" class="u-border-1 u-border-custom-color-11 u-border-no-left u-border-no-right u-border-no-top u-custom-font u-font-lobster u-input u-input-rectangle u-input-10" required=""></input>
                  </div>
                  <div class="u-form-group u-form-partition-factor-3 u-form-phone u-form-group-6">
                    <label for="cidade-215a" class="u-custom-font u-font-lobster u-label u-label-6">Cidade</label>
                    <input type="text" placeholder="Entre com a Cidade" id="cidade-215a" name="cidade" class="u-border-1 u-border-custom-color-11 u-border-no-left u-border-no-right u-border-no-top u-custom-font u-font-lobster u-input u-input-rectangle u-input-6" required=""></input>
                  </div> 
                  <div class="u-form-group u-form-partition-factor-2 u-form-group-2">
                    <label for="estado-f2a8" class="u-custom-font u-font-lobster u-label u-label-4">Estado</label>
                    <input type="text" placeholder="Entre com o Estado" id="estado-f2a8" name="estado" class="u-border-1 u-border-custom-color-11 u-border-no-left u-border-no-right u-border-no-top u-custom-font u-font-lobster u-input u-input-rectangle u-input-2" required="" ></input>
                  </div>
                  <div class="u-form-group u-form-partition-factor-3 u-form-group-11">
                    <label for="text-e9aa" class="u-custom-font u-font-lobster u-label u-label-11">Senha</label>
                    <input type="text" placeholder="Digite uma senha pra sua conta" id="text-e9aa" name="text" class="u-border-1 u-border-custom-color-11 u-border-no-left u-border-no-right u-border-no-top u-custom-font u-font-lobster u-input u-input-rectangle u-input-11" ></input>
                  </div>
                  <div class="u-align-center u-form-group u-form-submit u-form-group-13">
                    <a href="#" class="u-btn u-btn-round u-btn-submit u-button-style u-custom-color-8 u-radius-3 u-btn-1">Submit</a>
                    <input type="submit" value="submit" class="u-form-control-hidden"/>
                  </div>
                  <div class="u-form-send-message u-form-send-success"> Thank you! Your message has been sent. </div>
                  <div class="u-form-send-error u-form-send-message"> Unable to send your message. Please fix errors then try again. </div>
                  <input type="hidden" value="" name="recaptchaResponse"></input>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      </body>

    );

}

export default Cadastro;