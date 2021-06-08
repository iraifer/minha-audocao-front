import React from "react";

import './Home.css';
import './nicepage.css';

import {Link} from 'react-router-dom';

function Header() {
    return (
        <header class="u-align-center u-border-1 u-border-grey-25 u-clearfix u-header u-header" id="sec-b094">
            <div class="u-clearfix u-sheet u-sheet-1">
                <nav >
                    <div className="menu-collapse u-custom-font u-font-lobster"
                        style={
                            {fontSize: '1.5rem'}
                    }>
                        <a className="u-button-style u-custom-active-color u-custom-hover-color u-custom-text-active-color u-custom-text-color u-nav-link" href="#Top"
                            style={
                                {
                                    padding: '4px 0px',
                                    fontSize: 'calc(1em + 8px)'
                                }
                        }>
                            <svg xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#svg-7b92" className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 302 302"
                                style={
                                    {}
                                }/>
                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="svg-7b92" x="0px" y="0px" viewBox="0 0 302 302"
                                style={
                                    {enableBackground: 'new 0 0 302 302'}
                                }
                                xmlSpace="preserve"
                                className="u-svg-content">
                                <g><rect y={36}
                                        width={302}
                                        height={30}/><rect y={236}
                                        width={302}
                                        height={30}/><rect y={136}
                                        width={302}
                                        height={30}/>
                                </g><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/></svg>
                        </a>
                    </div>

                    <div class="u-custom-menu u-nav-container">
                        <ul class="u-custom-font u-font-lobster u-nav u-spacing-8 u-unstyled u-nav-1">
                            <li class="u-nav-item">
                                <Link to="/" className="u-active-custom-color-12 u-border-active-palette-1-base u-border-hover-palette-1-base u-button-style u-hover-custom-color-10 u-nav-link u-text-active-white u-text-grey-90 u-text-hover-white"
                                    style={
                                        {padding: '10px 16px'}
                                }>Home </Link>
                            </li>
                            <li class="u-nav-item">
                                <a class="u-active-custom-color-12 u-border-active-palette-1-base u-border-hover-palette-1-base u-button-style u-hover-custom-color-10 u-nav-link u-text-active-white u-text-grey-90 u-text-hover-white" href="adote.html"
                                    style={
                                        {padding: '10px 16px'}
                                }>Adote</a>
                            </li>
                            <li class="u-nav-item">
                                <a class="u-active-custom-color-12 u-border-active-palette-1-base u-border-hover-palette-1-base u-button-style u-hover-custom-color-10 u-nav-link u-text-active-white u-text-grey-90 u-text-hover-white" href="eventos.html"
                                    style={
                                        {padding: '10px 16px'}
                                }>Eventos</a>
                            </li>
                            <li class="u-nav-item">
                                <a class="u-active-custom-color-12 u-border-active-palette-1-base u-border-hover-palette-1-base u-button-style u-hover-custom-color-10 u-nav-link u-text-active-white u-text-grey-90 u-text-hover-white" href="Instituicoes.html"
                                    style={
                                        {padding: '10px 16px'}
                                }>Instituições</a>
                            </li>
                        </ul>
                    </div>
                    <div class="u-custom-menu u-nav-container-collapse">
                        <div class="u-align-center u-black u-container-style u-inner-container-layout u-opacity u-opacity-95 u-sidenav">
                            <div class="u-sidenav-overflow">
                                <div class="u-menu-close"></div>
                                <ul class="u-align-center u-nav u-popupmenu-items u-unstyled u-nav-2">
                                    <li class="u-nav-item">
                                        <a class="u-button-style u-nav-link" href="Home.html"
                                            style={
                                                {padding: '10px 30px'}
                                        }>Home</a>
                                    </li>
                                    <li class="u-nav-item">
                                        <a class="u-button-style u-nav-link" href="adote.html"
                                            style={
                                                {padding: '10px 30px'}
                                        }>Adote</a>
                                    </li>
                                    <li class="u-nav-item">
                                        <a class="u-button-style u-nav-link" href="eventos.html"
                                            style={
                                                {padding: '10px 30px'}
                                        }>Eventos</a>
                                    </li>
                                    <li class="u-nav-item">
                                        <a class="u-button-style u-nav-link" href="Instituicoes.html"
                                            style={
                                                {padding: '10px 30px'}
                                        }>Instituições</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="u-black u-menu-overlay u-opacity u-opacity-70"></div>
                    </div>                   
                </nav>
                
                <a href="login.html" data-page-id="914621728" class="u-border-1 u-border-active-custom-color-10 u-border-hover-custom-color-10 u-btn u-button-style u-custom-font u-font-lobster u-none u-text-body-color u-btn-1">Entrar</a>
                {/* <a href="/CadastroApp" data-page-id="240073938" class="u-btn u-btn-round u-button-style u-custom-color-9 u-custom-font u-font-lobster u-hover-custom-color-10 u-radius-7 u-btn-2">Criar conta</a> */}
                <Link to="/CadastroApp" className="u-btn u-btn-round u-button-style u-custom-color-9 u-custom-font u-font-lobster u-hover-custom-color-10 u-radius-7 u-btn-2"
                    style={
                                {padding: '10px 16px'}
                        }>Criar Conta </Link>
                <a href="index.html" class="u-border-1 u-border-active-custom-color-10 u-border-hover-custom-color-10 u-btn u-button-style u-custom-font u-font-lobster u-none u-text-body-color u-btn-3">Minha Audoção</a>
                <div alt="" class="u-image u-image-circle u-image-1" data-image-width="1280" data-image-height="853"></div>
            </div>
        </header>
    );

}

export default Header;
