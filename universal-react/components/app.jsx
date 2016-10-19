// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';

class AppComponent extends Component {
  render() {
    return (
      <div>
        <h2> Welcome to my App</h2>
        <ul>
          <li> <Link to='/'>Home</Link> </li>
          <li> <Link to='/about'>About</Link> </li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

export default AppComponent;