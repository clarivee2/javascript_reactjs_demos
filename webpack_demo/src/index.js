import _ from 'lodash';

function component() {
    var element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack after mod'], ' ');
  
    return element;
  }
  
  document.body.appendChild(component());