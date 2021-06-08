import React from "react";

function Login() {
    return (
        <section class="u-border-1 u-border-grey-75 u-clearfix u-custom-color-12 u-section-1" id="carousel_8559">
            <div class="u-clearfix u-sheet u-sheet-1">
                <img src="images/155886378-0.jpeg" alt="" class="u-image u-image-default u-image-1" data-image-width="900" data-image-height="900"></img>
                <div class="u-align-left u-border-5 u-border-custom-color-11 u-container-style u-group u-radius-50 u-shape-round u-white u-group-1">
                    <div class="u-container-layout u-container-layout-1">
                        <h2 class="u-custom-font u-font-lobster u-text u-text-custom-color-12 u-text-1">Login</h2>
                        <div class="u-align-left u-form u-form-1">
                            <form action="#" method="POST" class="u-clearfix u-form-spacing-42 u-form-vertical u-inner-form" style="padding: 40px;" source="custom" name="form">
                                <div class="u-form-group u-form-name u-form-group-1">
                                    <label for="name-5a14" class="u-form-control-hidden u-label" wfd-invisible="true">Name</label>
                                    <input type="text" placeholder="Digite seu email" id="name-5a14" name="email-1" class="u-border-2 u-border-black u-border-no-left u-border-no-right u-border-no-top u-input u-input-rectangle u-white" required=""></input>
                                </div>
                                <div class="u-form-group u-form-group-2">
                                    <label for="email-5a14" class="u-form-control-hidden u-label" wfd-invisible="true">Email</label>
                                    <input type="text" placeholder="Entre com sua senha" id="email-5a14" name="senha" class="u-border-2 u-border-black u-border-no-left u-border-no-right u-border-no-top u-input u-input-rectangle u-white" required="required"></input>
                                </div>
                                <div class="u-align-center u-form-group u-form-submit u-form-group-3">
                                    <a href="#" class="u-border-2 u-border-black u-btn u-btn-submit u-button-style u-hover-black u-none u-text-black u-text-hover-white u-btn-1">ENVIAR</a>
                                    <input type="submit" value="submit" class="u-form-control-hidden" wfd-invisible="true"></input>
                                </div>
                                <div class="u-form-send-message u-form-send-success" wfd-invisible="true">
                                    Thank you! Your message has been sent.
                                </div>
                                <div class="u-form-send-error u-form-send-message" wfd-invisible="true">
                                    Unable to send your message. Please fix errors then try again.
                                </div>
                                <input type="hidden" value="" name="recaptchaResponse" wfd-invisible="true"></input>
                            </form>
                        </div>
                        <a href="cadastro.html" data-page-id="240073938" class="u-active-none u-border-2 u-border-active-custom-color-9 u-border-custom-color-11 u-border-hover-custom-color-10 u-btn u-button-style u-hover-none u-none u-text-black u-text-hover-palette-2-base u-btn-2">Não tem uma conta? Cadastre-se</a>
                    </div>
                </div>
            </div>
        </section>
    );

}

export default Login;
