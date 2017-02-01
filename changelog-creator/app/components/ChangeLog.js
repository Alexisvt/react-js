import React, { Component } from 'react';
import { Link } from 'react-router';

export default class ChangeLogComponent extends Component {
  render() {
    return (
      <div>
        <div>
          <Link to="/">
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
        </div>
        <p>Hola mundo</p>
      </div>);
  }
}
