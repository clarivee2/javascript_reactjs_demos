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
import NumberList from './NumberList/index.js';

function renderList(domElement, numbers) {
    ReactDOM.render(
        <NumberList numbers={numbers} />,
         domElement);
}

/**************************
 * Form - Input text component
 */
import NameForm from './NameForm/index.js';

function renderFormTestInput(domElement) {
    ReactDOM.render(
        <NameForm />,
         domElement);
}


//inline render function
function renderAll() {
    renderHelloinJSX(document.getElementById('reactjsJSXApp'));

    // use the inline wrapper
    const getMessage = () => "Hello Babel World";
    document.getElementById('babelApp').innerHTML = getMessage();
    
    renderJSXTranspiled(document.getElementById('componentTest1'));

    renderTimer(document.getElementById('componentTest2'));
    
    const numbers = [1,2,3,4,5];
    renderList(document.getElementById('listTest'), numbers);

    // form tests
    renderFormTestInput(document.getElementById('formTestInput'))
}

renderAll();
