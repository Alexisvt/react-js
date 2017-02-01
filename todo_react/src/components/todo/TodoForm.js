// @flow
import React, {PropTypes} from 'react';

interface ITodoFormProps {
  currentTodo: string;
  handleInputChange(e: Event): void;
}

export const TodoForm = ({currentTodo, handleInputChange}: ITodoFormProps) => (
  <form>
    <input 
      type="text" 
      value={currentTodo} 
      onChange={handleInputChange} />
  </form>
);

TodoForm.propTypes = {
  currentTodo: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired
};