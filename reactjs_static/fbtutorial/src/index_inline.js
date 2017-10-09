// *********************************
//  inline ECMA6 script wrappers for index.html
//
// *********************************

function renderHelloinJSX(domElement) {
    // simple - JSX script and ES6 format
    //  didn't need these because of the non-JSX piece
    //import React from 'react';
    //import ReactDOM from 'react-dom';

    ReactDOM.render(
        <div>Hello World from JSX</div>,
        domElement
    )
};

/***************************
 *  babel component test
 ***************************/
import Timer from './Timer/index.js'

function renderTimer(domElement) {
    ReactDOM.render(
        <Timer />,
         domElement);
};
