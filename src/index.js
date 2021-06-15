import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import Router from './Router';
import reportWebVitals from './reportWebVitals';

import store from './store';

import { Provider } from 'react-redux';

function render() {
    ReactDOM.render (
        <React.StrictMode>
            <Provider store={store}>
                <Router/>
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

render();

reportWebVitals();
