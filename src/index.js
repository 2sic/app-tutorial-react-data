import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// The setTimeout(...) wrapper is needed because DNN's service framework is not initialized yet when this code runs
window.setTimeout(function() {
    let root = document.getElementById('root');
    ReactDOM.render(<App />, root);
}, 0);