// @flow
import React, { PropTypes } from 'react';
import { type ITodo } from '../../App';


export const TodoItem = ({id, isComplete, name}: ITodo) => (
  <li>
    <input defaultChecked={isComplete} type="checkbox" /> Learn {name}
  </li>
);

TodoItem.propTypes = {
  id: PropTypes.number,
  isComplete: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired
};