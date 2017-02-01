import React, { PropTypes } from 'react';
import { type ITodo } from '../../App';
import { TodoItem } from './TodoItem';

interface ITodoListProps {
  todosElements: ITodo[];
}

export const TodoList = ({todosElements}: ITodoListProps) => (
  <div className="Todo-List">
    <ul>
      {todosElements.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </ul>
  </div>
);

TodoList.propTypes = {
  todosElements: PropTypes.array.isRequired
};