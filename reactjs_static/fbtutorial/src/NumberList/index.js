// lister component

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//
// list item - define as a minimal component - native js function parameter
//
function ListItem(props) {
  // the list key means nothing to html - no need to add it here
  return <li>{props.value}</li>;
}

//
// THE number list - define as a full ES6 component
//  - important - specify and use unique keys
//
class NumberList extends Component {

  listItems;

  constructor(props) {
    super(props);

    const numbers = props.numbers;
    this.listItems = numbers.map((number) =>
      // keys needed here - call the ListItem component
      <ListItem key={number.toString()}
        value={number} />
    )
  }
  render() {
    return(
    <ul>
      {this.listItems}
    </ul>
   );
  }
};

export default NumberList;