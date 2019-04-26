import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx';

import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';

import './css/styles.css';

ReactDOM.render(
    <App />,
    document.querySelector('.app')
);
