// lister component

import React , {Component} from 'react';
import ReactDOM from 'react-dom';
  // pre es6 ... nothing

class Lister extends Component {

    render() {
  // simple - non-JSX script
  var elem = React.createElement;

  // reference to keep from having to type this all the time
  return (elem('div', null, 'Hello World from a List'));
    }
};

export default Lister;