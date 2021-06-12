import React from "react";
import '../Home/Home.css';
import '../Nicepage/nicepage.css';

function Contate() {
    return (
        <section class="u-clearfix u-grey-5 u-section-6" id="carousel_ef8d">
            <div class="u-custom-color-12 u-expanded-width u-shape u-shape-rectangle u-shape-1"></div>
            <div class="u-align-left u-border-1 u-border-grey-40 u-container-style u-group u-white u-group-1">
                <div class="u-container-layout u-container-layout-1">
                    <h2 class="u-text u-text-body-color u-text-1">CONTATE-NOS</h2>
                    <div class="u-align-left u-form u-form-1">
                        <form action="#Top" method="POST" class="u-clearfix u-form-spacing-28 u-form-vertical u-inner-form" style={{padding: '10px'}} source="custom" name="form">
                            <div class="u-form-group u-form-name u-form-group-1">
                                <label for="name-5a14" class="u-form-control-hidden u-label" wfd-invisible="true">Name</label>
                                <input type="text" placeholder="Digite seu nome" id="name-5a14" name="name" class="u-border-2 u-border-black u-border-no-left u-border-no-right u-border-no-top u-input u-input-rectangle u-white" required=""></input>
                            </div>
                            <div class="u-form-email u-form-group u-form-group-2">
                                <label for="email-5a14" class="u-form-control-hidden u-label" wfd-invisible="true">Email</label>
                                <input type="email" placeholder="Entre com um email válido" id="email-5a14" name="email" class="u-border-2 u-border-black u-border-no-left u-border-no-right u-border-no-top u-input u-input-rectangle u-white" required=""></input>
                            </div>
                            <div class="u-form-group u-form-message u-form-group-3">
                                <label for="message-5a14" class="u-form-control-hidden u-label" wfd-invisible="true">Message</label>
                                <textarea placeholder="Digite sua mensagem" rows="4" cols="50" id="message-5a14" name="message" class="u-border-2 u-border-black u-border-no-left u-border-no-right u-border-no-top u-input u-input-rectangle u-white" required=""></textarea>
                            </div>
                            <div class="u-align-left u-form-group u-form-submit u-form-group-4">
                                <a href="#Top" class="u-border-2 u-border-black u-btn u-btn-submit u-button-style u-hover-black u-none u-text-black u-text-hover-white u-btn-1">ENVIAR</a>
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
                </div>
            </div>
            <div alt="" class="u-image u-image-circle u-image-1" data-image-width="150" data-image-height="99"></div>
        </section>
    );
}

export default Contate;
