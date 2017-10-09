'use strict';

var _index = require('./Timer/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// *********************************
//  inline ECMA6 script wrappers for index.html
//
// *********************************

function renderHelloinJSX(domElement) {
    // simple - JSX script and ES6 format
    //  didn't need these because of the non-JSX piece
    //import React from 'react';
    //import ReactDOM from 'react-dom';

    ReactDOM.render(React.createElement(
        'div',
        null,
        'Hello World from JSX'
    ), domElement);
};

/***************************
 *  babel component test
 ***************************/


function renderTimer(domElement) {
    ReactDOM.render(React.createElement(_index2.default, null), domElement);
};