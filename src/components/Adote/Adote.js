import React from "react";

function Adote() {
    return (
        <section class="u-clearfix u-section-2" id="sec-051a">
            <div class="u-container-style u-custom-color-12 u-group u-group-1">
                <div class="u-container-layout u-container-layout-1">
                    <div class="u-expanded-width u-form u-form-1">
                        <form action="#" method="POST" class="u-clearfix u-form-spacing-23 u-form-vertical u-inner-form" style="padding: 15px;" source="custom" name="form">
                            <div class="u-form-group">
                                <label for="email-6797" class="u-custom-font u-font-oswald u-label u-label-1">Localização</label>
                                <input type="text" id="email-6797" name="txt_localizacao" class="u-border-1 u-border-white u-custom-font u-font-oswald u-input u-input-rectangle u-radius-50 u-white u-input-1" required="required" placeholder=""></input>
                            </div>
                            <div class="u-form-group u-form-select u-form-group-2">
                                <label for="select-88a7" class="u-custom-font u-font-oswald u-label u-label-2">Espécie</label>
                                <div class="u-form-select-wrapper">
                                    <select id="select-88a7" name="select_especie" class="u-border-1 u-border-white u-custom-font u-font-oswald u-input u-input-rectangle u-radius-50 u-white u-input-2">
                                        <option value="Gato">Gato</option>
                                        <option value="Cachorro">Cachorro</option>
                                        <option value="Coelho">Coelho</option>
                                        <option value="Passáros">Passáros</option>
                                        <option value="Outros">Outros</option>
                                    </select>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" version="1" class="u-caret">
                                        <path fill="currentColor" d="M4 8L0 4h8z"></path>
                                    </svg>
                                </div>
                            </div>
                            <div class="u-form-group u-form-select u-form-group-3">
                                <label for="select-45ba" class="u-custom-font u-font-oswald u-label u-label-3">Gênero</label>
                                <div class="u-form-select-wrapper">
                                    <select id="select-45ba" name="select_genero" class="u-border-1 u-border-white u-custom-font u-font-oswald u-input u-input-rectangle u-radius-50 u-white u-input-3">
                                        <option value="Feminino">Feminino</option>
                                        <option value="Masculino">Masculino</option>
                                    </select>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" version="1" class="u-caret">
                                        <path fill="currentColor" d="M4 8L0 4h8z"></path>
                                    </svg>
                                </div>
                            </div>
                            <div class="u-form-group u-form-group-4">
                                <label for="text-9d31" class="u-custom-font u-font-oswald u-label u-label-4">Nome da instituição</label>
                                <input type="text" placeholder="Digite o nome da instituição" id="text-9d31" name="txt_insti_nome" class="u-border-1 u-border-white u-custom-font u-font-oswald u-input u-input-rectangle u-radius-50 u-white u-input-4"></input>
                            </div>
                            <div class="u-form-group u-form-select u-form-group-5">
                                <label for="select-293b" class="u-custom-font u-font-oswald u-label u-label-5">Idade</label>
                                <div class="u-form-select-wrapper">
                                    <select id="select-293b" name="select_idade" class="u-border-1 u-border-white u-custom-font u-font-oswald u-input u-input-rectangle u-radius-50 u-white u-input-5">
                                        <option value="Menor que 1 ano">Menor que 1 ano</option>
                                        <option value="Entre 1 e 2 anos">Entre 1 e 2 anos</option>
                                        <option value="Entre 3 e 6  anos">Entre 3 e 6  anos</option>
                                        <option value="Entre 5 e 8 anos">Entre 5 e 8 anos</option>
                                        <option value="Maior que 8 anos">Maior que 8 anos</option>
                                    </select>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" version="1" class="u-caret">
                                        <path fill="currentColor" d="M4 8L0 4h8z"></path>
                                    </svg>
                                </div>
                            </div>
                            <div class="u-align-center u-form-group u-form-submit">
                                <a href="#" class="u-btn u-btn-round u-btn-submit u-button-style u-custom-color-9 u-hover-custom-color-11 u-radius-10 u-btn-1">BUSCAR</a>
                                <input type="submit" value="submit" class="u-form-control-hidden"></input>
                            </div>
                            <div class="u-form-send-message u-form-send-success">Thank you! Your message has been sent.</div>
                            <div class="u-form-send-error u-form-send-message">Unable to send your message. Please fix errors then try again.</div>
                            <input type="hidden" value="" name="recaptchaResponse"></input>
                        </form>
                    </div>
                    <span class="u-icon u-icon-circle u-text-white u-icon-1">
                        <svg class="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 512 512.001" style="">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg-9877"></use>
                        </svg>
                        <svg class="u-svg-content" viewBox="0 0 512 512.001" id="svg-9877">
                            <path d="m220.292969 440.5c-10.90625-7.878906-17.277344-15.859375-19.503907-24.410156-8.257812-31.921875-34.921874-55.222656-64.839843-55.222656-29.914063 0-57.578125 23.300781-65.835938 55.238281-2.226562 8.519531-8.597656 16.515625-19.507812 24.40625-13.28125 9.621093-19.355469 24.5-15.855469 38.847656 4.207031 17.261719 23.375 32.613281 49.59375 32.613281 11.085938 0 21.613281-2.84375 30.429688-8.214844 5.855468-3.589843 13.824218-5.492187 21.148437-5.492187 7.320313 0 14.273437 1.890625 20.207031 5.476563 8.84375 5.402343 19.3125 8.257812 30.296875 8.257812 26.203125 0 45.488281-15.273438 49.726563-32.636719 3.5-14.351562-2.589844-29.246093-15.859375-38.863281zm0 0"></path>
                            <path d="m59.976562 360.867188c0-17.351563-13.71875-44.984376-29.988281-44.984376-16.265625 0-29.988281 27.632813-29.988281 44.984376 0 16.53125 13.457031 29.988281 29.988281 29.988281s29.988281-13.457031 29.988281-29.988281zm0 0"></path>
                            <path d="m240.910156 315.882812c-16.265625 0-29.988281 27.632813-29.988281 44.984376 0 16.53125 13.457031 29.988281 29.988281 29.988281s29.988282-13.457031 29.988282-29.988281c0-17.351563-13.71875-44.984376-29.988282-44.984376zm0 0"></path>
                            <path d="m150.945312 300.886719c0 16.535156 13.457032 29.992187 29.988282 29.992187s29.988281-13.457031 29.988281-29.992187c0-17.351563-13.71875-44.980469-29.988281-44.980469-16.269532 0-29.988282 27.628906-29.988282 44.980469zm0 0"></path>
                            <path d="m89.96875 330.878906c16.53125 0 29.988281-13.457031 29.988281-29.992187 0-17.351563-13.722656-44.980469-29.988281-44.980469-16.269531 0-29.992188 27.628906-29.992188 44.980469 0 16.535156 13.457032 29.992187 29.992188 29.992187zm0 0"></path>
                            <path d="m461.203125 184.59375c-10.90625-7.878906-17.277344-16.859375-19.503906-25.410156-8.257813-31.921875-35.921875-54.222656-65.839844-54.222656-29.914063 0-56.578125 22.300781-64.835937 54.238281-2.226563 8.523437-8.597657 17.515625-19.507813 25.410156-13.28125 9.621094-19.355469 24.496094-15.855469 38.847656 4.207032 17.257813 23.375 32.609375 49.59375 32.609375 11.085938 0 21.613282-2.839844 30.429688-8.214844 5.855468-3.589843 12.824218-5.492187 20.148437-5.492187 7.320313 0 15.273438 1.890625 21.207031 5.476563 8.84375 5.402343 19.3125 8.261718 30.296876 8.261718 26.203124 0 45.488281-15.277344 49.726562-32.640625 3.5-14.351562-2.589844-29.242187-15.859375-38.863281zm0 0"></path>
                            <path d="m300.890625 104.960938c0-17.351563-13.722656-44.984376-29.992187-44.984376-16.265626 0-29.988282 27.632813-29.988282 44.984376 0 16.53125 13.457032 29.988281 29.988282 29.988281 16.535156 0 29.992187-13.457031 29.992187-29.988281zm0 0"></path>
                            <path d="m481.820312 59.976562c-16.265624 0-29.988281 27.632813-29.988281 44.984376 0 16.53125 13.457031 29.988281 29.988281 29.988281 16.535157 0 29.992188-13.457031 29.992188-29.988281 0-17.351563-13.722656-44.984376-29.992188-44.984376zm0 0"></path>
                            <path d="m391.855469 44.984375c0 16.53125 13.457031 29.988281 29.988281 29.988281s29.988281-13.457031 29.988281-29.988281c0-17.351563-13.71875-44.984375-29.988281-44.984375s-29.988281 27.632812-29.988281 44.984375zm0 0"></path>
                            <path d="m300.890625 44.984375c0 16.53125 13.457031 29.988281 29.988281 29.988281s29.988282-13.457031 29.988282-29.988281c0-17.351563-13.722657-44.984375-29.988282-44.984375-16.269531 0-29.988281 27.632812-29.988281 44.984375zm0 0"></path>
                        </svg>
                    </span>
                    <span class="u-icon u-icon-circle u-text-white u-icon-2">
                        <svg class="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 512 512.001" style="">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg-f97a"></use>
                        </svg>
                        <svg class="u-svg-content" viewBox="0 0 512 512.001" id="svg-f97a">
                            <path d="m220.292969 440.5c-10.90625-7.878906-17.277344-15.859375-19.503907-24.410156-8.257812-31.921875-34.921874-55.222656-64.839843-55.222656-29.914063 0-57.578125 23.300781-65.835938 55.238281-2.226562 8.519531-8.597656 16.515625-19.507812 24.40625-13.28125 9.621093-19.355469 24.5-15.855469 38.847656 4.207031 17.261719 23.375 32.613281 49.59375 32.613281 11.085938 0 21.613281-2.84375 30.429688-8.214844 5.855468-3.589843 13.824218-5.492187 21.148437-5.492187 7.320313 0 14.273437 1.890625 20.207031 5.476563 8.84375 5.402343 19.3125 8.257812 30.296875 8.257812 26.203125 0 45.488281-15.273438 49.726563-32.636719 3.5-14.351562-2.589844-29.246093-15.859375-38.863281zm0 0"></path>
                            <path d="m59.976562 360.867188c0-17.351563-13.71875-44.984376-29.988281-44.984376-16.265625 0-29.988281 27.632813-29.988281 44.984376 0 16.53125 13.457031 29.988281 29.988281 29.988281s29.988281-13.457031 29.988281-29.988281zm0 0"></path>
                            <path d="m240.910156 315.882812c-16.265625 0-29.988281 27.632813-29.988281 44.984376 0 16.53125 13.457031 29.988281 29.988281 29.988281s29.988282-13.457031 29.988282-29.988281c0-17.351563-13.71875-44.984376-29.988282-44.984376zm0 0"></path>
                            <path d="m150.945312 300.886719c0 16.535156 13.457032 29.992187 29.988282 29.992187s29.988281-13.457031 29.988281-29.992187c0-17.351563-13.71875-44.980469-29.988281-44.980469-16.269532 0-29.988282 27.628906-29.988282 44.980469zm0 0"></path>
                            <path d="m89.96875 330.878906c16.53125 0 29.988281-13.457031 29.988281-29.992187 0-17.351563-13.722656-44.980469-29.988281-44.980469-16.269531 0-29.992188 27.628906-29.992188 44.980469 0 16.535156 13.457032 29.992187 29.992188 29.992187zm0 0"></path>
                            <path d="m461.203125 184.59375c-10.90625-7.878906-17.277344-16.859375-19.503906-25.410156-8.257813-31.921875-35.921875-54.222656-65.839844-54.222656-29.914063 0-56.578125 22.300781-64.835937 54.238281-2.226563 8.523437-8.597657 17.515625-19.507813 25.410156-13.28125 9.621094-19.355469 24.496094-15.855469 38.847656 4.207032 17.257813 23.375 32.609375 49.59375 32.609375 11.085938 0 21.613282-2.839844 30.429688-8.214844 5.855468-3.589843 12.824218-5.492187 20.148437-5.492187 7.320313 0 15.273438 1.890625 21.207031 5.476563 8.84375 5.402343 19.3125 8.261718 30.296876 8.261718 26.203124 0 45.488281-15.277344 49.726562-32.640625 3.5-14.351562-2.589844-29.242187-15.859375-38.863281zm0 0"></path>
                            <path d="m300.890625 104.960938c0-17.351563-13.722656-44.984376-29.992187-44.984376-16.265626 0-29.988282 27.632813-29.988282 44.984376 0 16.53125 13.457032 29.988281 29.988282 29.988281 16.535156 0 29.992187-13.457031 29.992187-29.988281zm0 0"></path>
                            <path d="m481.820312 59.976562c-16.265624 0-29.988281 27.632813-29.988281 44.984376 0 16.53125 13.457031 29.988281 29.988281 29.988281 16.535157 0 29.992188-13.457031 29.992188-29.988281 0-17.351563-13.722656-44.984376-29.992188-44.984376zm0 0"></path>
                            <path d="m391.855469 44.984375c0 16.53125 13.457031 29.988281 29.988281 29.988281s29.988281-13.457031 29.988281-29.988281c0-17.351563-13.71875-44.984375-29.988281-44.984375s-29.988281 27.632812-29.988281 44.984375zm0 0"></path>
                            <path d="m300.890625 44.984375c0 16.53125 13.457031 29.988281 29.988281 29.988281s29.988282-13.457031 29.988282-29.988281c0-17.351563-13.722657-44.984375-29.988282-44.984375-16.269531 0-29.988281 27.632812-29.988281 44.984375zm0 0"></path>
                        </svg>
                    </span>
                    <span class="u-icon u-icon-circle u-text-white u-icon-3">
                        <svg class="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 512 512.001" style="">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg-27ad"></use>
                        </svg>
                        <svg class="u-svg-content" viewBox="0 0 512 512.001" id="svg-27ad">
                            <path d="m220.292969 440.5c-10.90625-7.878906-17.277344-15.859375-19.503907-24.410156-8.257812-31.921875-34.921874-55.222656-64.839843-55.222656-29.914063 0-57.578125 23.300781-65.835938 55.238281-2.226562 8.519531-8.597656 16.515625-19.507812 24.40625-13.28125 9.621093-19.355469 24.5-15.855469 38.847656 4.207031 17.261719 23.375 32.613281 49.59375 32.613281 11.085938 0 21.613281-2.84375 30.429688-8.214844 5.855468-3.589843 13.824218-5.492187 21.148437-5.492187 7.320313 0 14.273437 1.890625 20.207031 5.476563 8.84375 5.402343 19.3125 8.257812 30.296875 8.257812 26.203125 0 45.488281-15.273438 49.726563-32.636719 3.5-14.351562-2.589844-29.246093-15.859375-38.863281zm0 0"></path>
                            <path d="m59.976562 360.867188c0-17.351563-13.71875-44.984376-29.988281-44.984376-16.265625 0-29.988281 27.632813-29.988281 44.984376 0 16.53125 13.457031 29.988281 29.988281 29.988281s29.988281-13.457031 29.988281-29.988281zm0 0"></path>
                            <path d="m240.910156 315.882812c-16.265625 0-29.988281 27.632813-29.988281 44.984376 0 16.53125 13.457031 29.988281 29.988281 29.988281s29.988282-13.457031 29.988282-29.988281c0-17.351563-13.71875-44.984376-29.988282-44.984376zm0 0"></path>
                            <path d="m150.945312 300.886719c0 16.535156 13.457032 29.992187 29.988282 29.992187s29.988281-13.457031 29.988281-29.992187c0-17.351563-13.71875-44.980469-29.988281-44.980469-16.269532 0-29.988282 27.628906-29.988282 44.980469zm0 0"></path>
                            <path d="m89.96875 330.878906c16.53125 0 29.988281-13.457031 29.988281-29.992187 0-17.351563-13.722656-44.980469-29.988281-44.980469-16.269531 0-29.992188 27.628906-29.992188 44.980469 0 16.535156 13.457032 29.992187 29.992188 29.992187zm0 0"></path>
                            <path d="m461.203125 184.59375c-10.90625-7.878906-17.277344-16.859375-19.503906-25.410156-8.257813-31.921875-35.921875-54.222656-65.839844-54.222656-29.914063 0-56.578125 22.300781-64.835937 54.238281-2.226563 8.523437-8.597657 17.515625-19.507813 25.410156-13.28125 9.621094-19.355469 24.496094-15.855469 38.847656 4.207032 17.257813 23.375 32.609375 49.59375 32.609375 11.085938 0 21.613282-2.839844 30.429688-8.214844 5.855468-3.589843 12.824218-5.492187 20.148437-5.492187 7.320313 0 15.273438 1.890625 21.207031 5.476563 8.84375 5.402343 19.3125 8.261718 30.296876 8.261718 26.203124 0 45.488281-15.277344 49.726562-32.640625 3.5-14.351562-2.589844-29.242187-15.859375-38.863281zm0 0"></path>
                            <path d="m300.890625 104.960938c0-17.351563-13.722656-44.984376-29.992187-44.984376-16.265626 0-29.988282 27.632813-29.988282 44.984376 0 16.53125 13.457032 29.988281 29.988282 29.988281 16.535156 0 29.992187-13.457031 29.992187-29.988281zm0 0"></path>
                            <path d="m481.820312 59.976562c-16.265624 0-29.988281 27.632813-29.988281 44.984376 0 16.53125 13.457031 29.988281 29.988281 29.988281 16.535157 0 29.992188-13.457031 29.992188-29.988281 0-17.351563-13.722656-44.984376-29.992188-44.984376zm0 0"></path>
                            <path d="m391.855469 44.984375c0 16.53125 13.457031 29.988281 29.988281 29.988281s29.988281-13.457031 29.988281-29.988281c0-17.351563-13.71875-44.984375-29.988281-44.984375s-29.988281 27.632812-29.988281 44.984375zm0 0"></path>
                            <path d="m300.890625 44.984375c0 16.53125 13.457031 29.988281 29.988281 29.988281s29.988282-13.457031 29.988282-29.988281c0-17.351563-13.722657-44.984375-29.988282-44.984375-16.269531 0-29.988281 27.632812-29.988281 44.984375zm0 0"></path>
                        </svg>
                    </span>
                </div>
            </div>
            <div class="u-container-style u-group u-white u-group-2">
                <div class="u-container-layout u-container-layout-2">
                    <h1 class="u-custom-font u-font-oswald u-text u-text-1">Pets Disponiveis&nbsp;</h1>
                    <div class="u-clearfix u-custom-html u-custom-html-1">
                        <style></style>
                        <p>
                            <select style=" width:180px;margin-left:140px" class="form-control" id="ordenar">
                                <option>Ordem crescente</option>
                                <option>Ordem descrescente</option>
                            </select>
                        </p>

                    </div>
                    <p class="u-custom-font u-font-oswald u-large-text u-text u-text-variant u-text-2">10 pets encontrados</p>
                    <p class="u-align-center u-custom-font u-font-oswald u-text u-text-3">
                        <nav aria-label="...">
                            <ul class="pagination">
                                <li class="page-item disabled">
                                    <a class="page-link" href="#" tabindex="-1">Anterior</a>
                                </li>
                                <li class="page-item">
                                    <a class="page-link" style="color: purple" href="#">1</a>
                                </li>
                                <li class="page-item active">
                                    <a class="page-link" style="background-color:purple;border-color:purple" href="#">2
                                        <span class="sr-only">(atual)</span>
                                    </a>
                                </li>
                                <li class="page-item">
                                    <a style="color: purple" class="page-link" href="#">3</a>
                                </li>
                                <li class="page-item">
                                    <a class="page-link" style="color: purple" href="#">Próximo</a>
                                </li>
                            </ul>
                        </nav>
                    </p>
                </div>
            </div>
            <div class="u-list u-list-1">
                <div class="u-repeater u-repeater-1">
                    <div class="u-container-style u-custom-color-10 u-list-item u-repeater-item u-shape-rectangle u-list-item-1">
                        <div class="u-container-layout u-similar-container u-container-layout-3">
                            <img alt="" class="u-image u-image-default u-image-1" data-image-width="1280" data-image-height="853" src="images/aa459116e158cd17547519f206f8ae9ebda6135723d846476a53ffa0a716697c67f5b29ecd36cd18cf1f91f7a8c4192fdcba81d5e6a393262e275c_1280.jpg"></img>
                            <h3 class="u-align-center u-custom-font u-font-lobster u-text u-text-4">Simba</h3>
                            <div class="u-border-1 u-border-grey-dark-1 u-line u-line-horizontal u-line-1"></div>
                            <p class="u-custom-font u-font-oswald u-text u-text-custom-color-12 u-text-5">Especie<br></br>
                                <br></br>
                            </p>
                            <p class="u-custom-font u-font-oswald u-text u-text-custom-color-12 u-text-6">Idade<br></br>
                            </p>
                            <p class="u-custom-font u-font-oswald u-text u-text-custom-color-12 u-text-7">Genero<br></br>
                            </p>
                            <p class="u-custom-font u-font-oswald u-text u-text-custom-color-12 u-text-8">Genero<br></br>
                            </p>
                            <p class="u-custom-font u-font-oswald u-text u-text-custom-color-12 u-text-9">Masculino</p>
                            <p class="u-custom-font u-font-oswald u-text u-text-custom-color-12 u-text-10">2 meses</p>
                            <p class="u-custom-font u-font-oswald u-text u-text-custom-color-12 u-text-11">Responsavel<br></br>
                            </p>
                            <p class="u-custom-font u-font-oswald u-text u-text-custom-color-12 u-text-12">Localizacao<br></br>
                                <br></br>
                            </p>
                            <p class="u-custom-font u-font-oswald u-text u-text-custom-color-12 u-text-13">Save My pet&nbsp;<br></br>
                                <br></br>
                            </p>
                            <p class="u-align-center u-custom-font u-font-oswald u-text u-text-custom-color-12 u-text-14">Sao Bernado do Campo&nbsp; &nbsp;Sao Paulo&nbsp;<br></br>
                                <br></br>
                            </p>
                            <a href="" class="u-align-center u-btn u-button-style u-custom-color-12 u-hover-custom-color-9 u-btn-2">Saber mais</a>
                        </div>
                    </div>
                    <div class="u-container-style u-custom-color-10 u-list-item u-repeater-item u-shape-rectangle u-list-item-2">
                        <div class="u-container-layout u-similar-container u-container-layout-4">
                            <img alt="" class="u-image u-image-default u-image-2" data-image-width="1280" data-image-height="853" src="images/aa459116e158cd17547519f206f8ae9ebda6135723d846476a53ffa0a716697c67f5b29ecd36cd18cf1f91f7a8c4192fdcba81d5e6a393262e275c_1280.jpg"></img>
                            <h3 class="u-align-center u-custom-font u-font-lobster u-text u-text-15">Simba</h3>
                            <div class="u-border-1 u-border-grey-dark-1 u-line u-line-horizontal u-line-2"></div>
                            <p class="u-custom-font u-font-oswald u-text u-text-custom-color-12 u-text-16">Especie<br></br>
                                <br></br>
                            </p>
                            <p class="u-custom-font u-font-oswald u-text u-text-custom-color-12 u-text-17">Idade<br></br>
                            </p>
                            <p class="u-custom-font u-font-oswald u-text u-text-custom-color-12 u-text-18">Genero<br></br>
                            </p>
                            <p class="u-custom-font u-font-oswald u-text u-text-custom-color-12 u-text-19">Genero<br></br>
                            </p>
                            <p class="u-custom-font u-font-oswald u-text u-text-custom-color-12 u-text-20">Masculino</p>
                            <p class="u-custom-font u-font-oswald u-text u-text-custom-color-12 u-text-21">2 meses</p>
                            <p class="u-custom-font u-font-oswald u-text u-text-custom-color-12 u-text-22">Responsavel<br></br>
                            </p>
                            <p class="u-custom-font u-font-oswald u-text u-text-custom-color-12 u-text-23">Localizacao<br></br>
                                <br></br>
                            </p>
                            <p class="u-custom-font u-font-oswald u-text u-text-custom-color-12 u-text-24">Save My pet&nbsp;<br></br>
                                <br></br>
                            </p>
                            <p class="u-align-center u-custom-font u-font-oswald u-text u-text-custom-color-12 u-text-25">Sao Bernado do Campo&nbsp; &nbsp;Sao Paulo&nbsp;<br></br>
                                <br></br>
                            </p>
                            <a href="" class="u-align-center u-btn u-button-style u-custom-color-12 u-hover-custom-color-9 u-btn-3">Saber mais</a>
                        </div>
                    </div>
                    <div class="u-container-style u-custom-color-10 u-list-item u-repeater-item u-shape-rectangle u-list-item-3">
                        <div class="u-container-layout u-similar-container u-container-layout-5">
                            <img alt="" class="u-image u-image-default u-image-3" data-image-width="1280" data-image-height="853" src="images/aa459116e158cd17547519f206f8ae9ebda6135723d846476a53ffa0a716697c67f5b29ecd36cd18cf1f91f7a8c4192fdcba81d5e6a393262e275c_1280.jpg"></img>
                            <h3 class="u-align-center u-custom-font u-font-lobster u-text u-text-26">Simba</h3>
                            <div class="u-border-1 u-border-grey-dark-1 u-line u-line-horizontal u-line-3"></div>
                            <p class="u-custom-font u-font-oswald u-text u-text-custom-color-12 u-text-27">Especie<br></br>
                                <br></br>
                            </p>
                            <p class="u-custom-font u-font-oswald u-text u-text-custom-color-12 u-text-28">Idade<br></br>
                            </p>
                            <p class="u-custom-font u-font-oswald u-text u-text-custom-color-12 u-text-29">Genero<br></br>
                            </p>
                            <p class="u-custom-font u-font-oswald u-text u-text-custom-color-12 u-text-30">Genero<br></br>
                            </p>
                            <p class="u-custom-font u-font-oswald u-text u-text-custom-color-12 u-text-31">Masculino</p>
                            <p class="u-custom-font u-font-oswald u-text u-text-custom-color-12 u-text-32">2 meses</p>
                            <p class="u-custom-font u-font-oswald u-text u-text-custom-color-12 u-text-33">Responsavel<br></br>
                            </p>
                            <p class="u-custom-font u-font-oswald u-text u-text-custom-color-12 u-text-34">Localizacao<br></br>
                                <br></br>
                            </p>
                            <p class="u-custom-font u-font-oswald u-text u-text-custom-color-12 u-text-35">Save My pet&nbsp;<br></br>
                                <br></br>
                            </p>
                            <p class="u-align-center u-custom-font u-font-oswald u-text u-text-custom-color-12 u-text-36">Sao Bernado do Campo&nbsp; &nbsp;Sao Paulo&nbsp;<br></br>
                                <br></br>
                            </p>
                            <a href="" class="u-align-center u-btn u-button-style u-custom-color-12 u-hover-custom-color-9 u-btn-4">Saber mais</a>
                        </div>
                    </div>
                    <div class="u-container-style u-custom-color-10 u-list-item u-repeater-item u-shape-rectangle u-list-item-4">
                        <div class="u-container-layout u-similar-container u-container-layout-6">
                            <img alt="" class="u-image u-image-default u-image-4" data-image-width="1280" data-image-height="853" src="images/aa459116e158cd17547519f206f8ae9ebda6135723d846476a53ffa0a716697c67f5b29ecd36cd18cf1f91f7a8c4192fdcba81d5e6a393262e275c_1280.jpg"></img>
                            <h3 class="u-align-center u-custom-font u-font-lobster u-text u-text-37">Simba</h3>
                            <div class="u-border-1 u-border-grey-dark-1 u-line u-line-horizontal u-line-4"></div>
                            <p class="u-custom-font u-font-oswald u-text u-text-custom-color-12 u-text-38">Especie<br></br>
                                <br></br>
                            </p>
                            <p class="u-custom-font u-font-oswald u-text u-text-custom-color-12 u-text-39">Idade<br></br>
                            </p>
                            <p class="u-custom-font u-font-oswald u-text u-text-custom-color-12 u-text-40">Genero<br></br>
                            </p>
                            <p class="u-custom-font u-font-oswald u-text u-text-custom-color-12 u-text-41">Genero<br></br>
                            </p>
                            <p class="u-custom-font u-font-oswald u-text u-text-custom-color-12 u-text-42">Masculino</p>
                            <p class="u-custom-font u-font-oswald u-text u-text-custom-color-12 u-text-43">2 meses</p>
                            <p class="u-custom-font u-font-oswald u-text u-text-custom-color-12 u-text-44">Responsavel<br></br>
                            </p>
                            <p class="u-custom-font u-font-oswald u-text u-text-custom-color-12 u-text-45">Localizacao<br></br>
                                <br></br>
                            </p>
                            <p class="u-custom-font u-font-oswald u-text u-text-custom-color-12 u-text-46">Save My pet&nbsp;<br></br>
                                <br></br>
                            </p>
                            <p class="u-align-center u-custom-font u-font-oswald u-text u-text-custom-color-12 u-text-47">Sao Bernado do Campo&nbsp; &nbsp;Sao Paulo&nbsp;<br></br>
                                <br></br>
                            </p>
                            <a href="" class="u-align-center u-btn u-button-style u-custom-color-12 u-hover-custom-color-9 u-btn-5">Saber mais</a>
                        </div>
                    </div>
                    <div class="u-container-style u-custom-color-10 u-list-item u-repeater-item u-shape-rectangle u-list-item-5">
                        <div class="u-container-layout u-similar-container u-container-layout-7">
                            <img alt="" class="u-image u-image-default u-image-5" data-image-width="1280" data-image-height="853" src="images/aa459116e158cd17547519f206f8ae9ebda6135723d846476a53ffa0a716697c67f5b29ecd36cd18cf1f91f7a8c4192fdcba81d5e6a393262e275c_1280.jpg"></img>
                            <h3 class="u-align-center u-custom-font u-font-lobster u-text u-text-48">Simba</h3>
                            <div class="u-border-1 u-border-grey-dark-1 u-line u-line-horizontal u-line-5"></div>
                            <p class="u-custom-font u-font-oswald u-text u-text-custom-color-12 u-text-49">Especie<br></br>
                                <br></br>
                            </p>
                            <p class="u-custom-font u-font-oswald u-text u-text-custom-color-12 u-text-50">Idade<br></br>
                            </p>
                            <p class="u-custom-font u-font-oswald u-text u-text-custom-color-12 u-text-51">Genero<br></br>
                            </p>
                            <p class="u-custom-font u-font-oswald u-text u-text-custom-color-12 u-text-52">Genero<br></br>
                            </p>
                            <p class="u-custom-font u-font-oswald u-text u-text-custom-color-12 u-text-53">Masculino</p>
                            <p class="u-custom-font u-font-oswald u-text u-text-custom-color-12 u-text-54">2 meses</p>
                            <p class="u-custom-font u-font-oswald u-text u-text-custom-color-12 u-text-55">Responsavel<br></br>
                            </p>
                            <p class="u-custom-font u-font-oswald u-text u-text-custom-color-12 u-text-56">Localizacao<br></br>
                                <br></br>
                            </p>
                            <p class="u-custom-font u-font-oswald u-text u-text-custom-color-12 u-text-57">Save My pet&nbsp;<br></br>
                                <br></br>
                            </p>
                            <p class="u-align-center u-custom-font u-font-oswald u-text u-text-custom-color-12 u-text-58">Sao Bernado do Campo&nbsp; &nbsp;Sao Paulo&nbsp;<br></br>
                                <br></br>
                            </p>
                            <a href="" class="u-align-center u-btn u-button-style u-custom-color-12 u-hover-custom-color-9 u-btn-6">Saber mais</a>
                        </div>
                    </div>
                    <div class="u-container-style u-custom-color-10 u-list-item u-repeater-item u-shape-rectangle u-list-item-6">
                        <div class="u-container-layout u-similar-container u-container-layout-8">
                            <img alt="" class="u-image u-image-default u-image-6" data-image-width="1280" data-image-height="853" src="images/aa459116e158cd17547519f206f8ae9ebda6135723d846476a53ffa0a716697c67f5b29ecd36cd18cf1f91f7a8c4192fdcba81d5e6a393262e275c_1280.jpg"></img>
                            <h3 class="u-align-center u-custom-font u-font-lobster u-text u-text-59">Simba</h3>
                            <div class="u-border-1 u-border-grey-dark-1 u-line u-line-horizontal u-line-6"></div>
                            <p class="u-custom-font u-font-oswald u-text u-text-custom-color-12 u-text-60">Especie<br></br>
                                <br></br>
                            </p>
                            <p class="u-custom-font u-font-oswald u-text u-text-custom-color-12 u-text-61">Idade<br></br>
                            </p>
                            <p class="u-custom-font u-font-oswald u-text u-text-custom-color-12 u-text-62">Genero<br></br>
                            </p>
                            <p class="u-custom-font u-font-oswald u-text u-text-custom-color-12 u-text-63">Genero<br></br>
                            </p>
                            <p class="u-custom-font u-font-oswald u-text u-text-custom-color-12 u-text-64">Masculino</p>
                            <p class="u-custom-font u-font-oswald u-text u-text-custom-color-12 u-text-65">2 meses</p>
                            <p class="u-custom-font u-font-oswald u-text u-text-custom-color-12 u-text-66">Responsavel<br></br>
                            </p>
                            <p class="u-custom-font u-font-oswald u-text u-text-custom-color-12 u-text-67">Localizacao<br></br>
                                <br></br>
                            </p>
                            <p class="u-custom-font u-font-oswald u-text u-text-custom-color-12 u-text-68">Save My pet&nbsp;<br></br>
                                <br></br>
                            </p>
                            <p class="u-align-center u-custom-font u-font-oswald u-text u-text-custom-color-12 u-text-69">Sao Bernado do Campo&nbsp; &nbsp;Sao Paulo&nbsp;<br></br>
                                <br></br>
                            </p>
                            <a href="" class="u-align-center u-btn u-button-style u-custom-color-12 u-hover-custom-color-9 u-btn-7">Saber mais</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Adote;
