import { useInput } from "../../hooks/useInput.hook";
import { usePerson } from '../../hooks/usePessoa.hook';
import React from "react";

function PessoaForm({ onSubmit }) {
  const [person] = usePerson();

  const [nome, , nomeProps] = useInput("");
  const [sobrenome, , sobrenomeProps] = useInput("");
  const [email, , emailProps] = useInput("");
  const [senha, , senhaProps] = useInput("");
  const [imagem, , imagemProps] = useInput("");


  const submit = (evt) => {
    evt.preventDefault();
    onSubmit(nome, sobrenome, email, senha, imagem);
  };

  return (
      <><div class="u-container-style u-group u-radius-50 u-shape-round u-white u-group-1">
      <div class="u-container-layout u-valign-middle u-container-layout-1">
        <div class="u-align-center u-form u-form-1">
          <form onSubmit={submit} class="u-clearfix u-form-spacing-2 u-form-vertical u-inner-form" style="padding: 0px;" source="custom" name="form">
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
              <input type="text" pattern="\+?\d{0,2}[\s\(\-]?([0-9]{3})[\s\)\-]?([\s\-]?)([0-9]{3})[\s\-]?([0-9]{2})[\s\-]?([0-9]{2})" id="phone-447e" name="document-1" class="u-border-1 u-border-custom-color-11 u-border-no-left u-border-no-right u-border-no-top u-custom-font u-font-lobster u-input u-input-rectangle u-input-2" required="required" placeholder="Digite seu cpf ou cnpj"></input>
            </div>
            <div class="u-form-group u-form-name u-form-group-3">
              <label for="name-f2a8" class="u-custom-font u-font-lobster u-label u-label-3">Nome</label>
              <input type="text" placeholder="" id="name-f2a8" name="nome" class="u-border-1 u-border-custom-color-11 u-border-no-left u-border-no-right u-border-no-top u-custom-font u-font-lobster u-input u-input-rectangle u-input-3" required="" {...nomeProps}></input>
            </div>
            <div class="u-form-email u-form-group u-form-partition-factor-2 u-form-group-4">
              <label for="email-f2a8" class="u-custom-font u-font-lobster u-label u-label-4">E-mail</label>
              <input type="email" placeholder="Entre com seu email" id="email-f2a8" name="email" class="u-border-1 u-border-custom-color-11 u-border-no-left u-border-no-right u-border-no-top u-custom-font u-font-lobster u-input u-input-rectangle u-input-4" required="" {...emailProps}></input>
            </div>
            <div class="u-form-address u-form-group u-form-group-5">
              <label for="address-de88" class="u-custom-font u-font-lobster u-label u-label-5">Cep</label>
              <input type="text" placeholder="Entre com o cep" id="address-de88" name="cep" class="u-border-1 u-border-custom-color-11 u-border-no-left u-border-no-right u-border-no-top u-custom-font u-font-lobster u-input u-input-rectangle u-input-5" required=""></input>
            </div>
            <div class="u-form-group u-form-partition-factor-3 u-form-phone u-form-group-6">
              <label for="phone-215a" class="u-custom-font u-font-lobster u-label u-label-6">Telefone</label>
              <input type="tel" pattern="\+?\d{0,3}[\s\(\-]?([0-9]{2,3})[\s\)\-]?([\s\-]?)([0-9]{3})[\s\-]?([0-9]{2})[\s\-]?([0-9]{2})" placeholder="Insira seu telefone" id="phone-215a" name="telefone" class="u-border-1 u-border-custom-color-11 u-border-no-left u-border-no-right u-border-no-top u-custom-font u-font-lobster u-input u-input-rectangle u-input-6" required=""></input>
            </div>
            <div class="u-form-group u-form-partition-factor-3 u-form-group-7">
              <label for="message-f2a8" class="u-custom-font u-font-lobster u-label u-label-7">Logradouro</label>
              <input placeholder="Entre com seu logradouro" rows="4" cols="50" id="message-f2a8" name="logradouro" class="u-border-1 u-border-custom-color-11 u-border-no-left u-border-no-right u-border-no-top u-custom-font u-font-lobster u-input u-input-rectangle u-input-7" required="required" type="text"></input>
            </div>
            <div class="u-form-group u-form-partition-factor-3 u-form-group-8">
              <label for="text-be7a" class="u-custom-font u-font-lobster u-label u-label-8">Numero</label>
              <input type="text" placeholder="Entre com o seu numero" id="text-be7a" name="numero" class="u-border-1 u-border-custom-color-11 u-border-no-left u-border-no-right u-border-no-top u-custom-font u-font-lobster u-input u-input-rectangle u-input-8"></input>
            </div>
            <div class="u-form-group u-form-partition-factor-3 u-form-group-9">
              <label for="text-6bfd" class="u-custom-font u-font-lobster u-label u-label-9">Email</label>
              <input type="text" placeholder="Insira sua cidade" id="text-6bfd" name="cidade" class="u-border-1 u-border-custom-color-11 u-border-no-left u-border-no-right u-border-no-top u-custom-font u-font-lobster u-input u-input-rectangle u-input-9" ></input>
            </div>
            <div class="u-form-group u-form-partition-factor-3 u-form-group-10">
              <label for="text-49db" class="u-custom-font u-font-lobster u-label u-label-10">Bairro</label>
              <input type="text" placeholder="Entre com o seu bairro" id="text-49db" name="bairro" class="u-border-1 u-border-custom-color-11 u-border-no-left u-border-no-right u-border-no-top u-custom-font u-font-lobster u-input u-input-rectangle u-input-10" required="required"></input>
            </div>
            <div class="u-form-group u-form-partition-factor-3 u-form-group-11">
              <label for="text-e9aa" class="u-custom-font u-font-lobster u-label u-label-11">Senha</label>
              <input type="text" placeholder="Digite uma senha pra sua conta" id="text-e9aa" name="text" class="u-border-1 u-border-custom-color-11 u-border-no-left u-border-no-right u-border-no-top u-custom-font u-font-lobster u-input u-input-rectangle u-input-11" {...senhaProps}></input>
            </div>
            <div class="u-form-address u-form-group u-form-group-12">
              <label for="address-4288" class="u-custom-font u-font-lobster u-label u-label-12">Estado</label>
              <input type="text" placeholder="Sao paulo " id="address-4288" name="address-1" class="u-border-1 u-border-custom-color-11 u-border-no-left u-border-no-right u-border-no-top u-custom-font u-font-lobster u-input u-input-rectangle u-input-12" required=""></input>
            </div>
            <div class="u-align-center u-form-group u-form-submit u-form-group-13">
              <a href="#" class="u-btn u-btn-round u-btn-submit u-button-style u-custom-color-8 u-radius-3 u-btn-1">Submit</a>
              <button type="submit" value="submit" class="u-form-control-hidden" className="action"></button>
            </div>
            <div class="u-form-send-message u-form-send-success"> Thank you!Your message has been sent.</div>
            <div class="u-form-send-error u-form-send-message"> Unable to send your message.Please fix errors then try again.</div>
            <input type="hidden" value="" name="recaptchaResponse"></input>
          </form>
        </div>
      </div>
    </div><h2 class="u-align-center u-custom-font u-font-lobster u-text u-text-white u-text-1">Crie sua conta </h2><div alt="" class="u-image u-image-circle u-image-1" data-image-width="900" data-image-height="900"></div>
    </>
  );
}

export default PessoaForm;