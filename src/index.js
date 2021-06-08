import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import 'proxy-polyfill/proxy.min.js';

import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import Router from './Router';
import reportWebVitals from './reportWebVitals';

import PessoaContextProvider from './contexts/PessoaContextProvider';

function render() {
    ReactDOM.render (
        <React.StrictMode>
            <PessoaContextProvider>
                <Router/>
            </PessoaContextProvider>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

render();

reportWebVitals();
