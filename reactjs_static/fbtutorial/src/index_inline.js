// *********************************
//  inline ECMA6 script wrappers for index.html
//
// *********************************

import React from 'react';
import ReactDOM from 'react-dom';


function renderHelloinJSX(domElement) {
    // simple - JSX script and ES6 format
    //  didn't need these because of the non-JSX piece

    ReactDOM.render(
        <div>Hello World from JSX</div>,
        domElement
    )
};

/***************************
 *  babel component test
 ***************************/
//TODO - figure out how to import modules using require
import Timer from './Timer/index.js';

function renderTimer(domElement) {
    ReactDOM.render(
        <Timer />,
         domElement);
};

/**************************
 * Non-JSX component
 */
import JSXTranspiled from './JSXTranspiled/index.js';

function renderJSXTranspiled(domElement) {
    ReactDOM.render(
        <JSXTranspiled />,
         domElement);
}

/**************************
 * List Component
 */
import Lister from './Lister/index.js';

function renderList(domElement) {
    ReactDOM.render(
        <Lister />,
         domElement);
}

//TODO - inline render function here
function renderAll() {
    renderHelloinJSX(document.getElementById('reactjsJSXApp'));

    // use the inline wrapper
    const getMessage = () => "Hello Babel World";
    document.getElementById('babelApp').innerHTML = getMessage();
    
    renderJSXTranspiled(document.getElementById('componentTest1'));

    renderTimer(document.getElementById('componentTest2'));
    
    renderList(document.getElementById('listTest'));
}

renderAll();
