import React, { PropTypes } from 'react';
import { type ITodo } from '../../App';
import { TodoItem } from './TodoItem';

interface ITodoListProps {
  todosElements: ITodo[];
  handleToggle(id: number): void;
}

export const TodoList = ({todosElements, handleToggle}: ITodoListProps) => (
  <div className="Todo-List">
    <ul>
      {todosElements.map((todo) => (
        <TodoItem key={todo.id} {...todo} handleToggle={handleToggle} />
      ))}
    </ul>
  </div>
);

TodoList.propTypes = {
  todosElements: PropTypes.array.isRequired,
  handleToggle: PropTypes.func.isRequired
};