// @flow
import React, { PropTypes } from 'react';
import { type ITodo } from '../../App';

interface ITodoItem extends ITodo {
  handleToggle(id: number): void
}

export const TodoItem = ({id, isComplete, name, handleToggle}: ITodoItem) => (
  <li>
    <input checked={isComplete} onChange={() => handleToggle(id)} type="checkbox" /> Learn {name}
  </li>
);

TodoItem.propTypes = {
  id: PropTypes.number.isRequired,
  isComplete: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  handleToggle: PropTypes.func.isRequired
};