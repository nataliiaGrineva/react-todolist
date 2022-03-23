import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from './Todo';

export const TodoList = (
  { todos, onChangeCompleted, onChangeTitle, onDestroy },
) => (
  <ul className="todo-list">
    {todos.map(todo => (
      <Todo
        key={todo.id}
        todo={todo}
        onChangeCompleted={onChangeCompleted}
        onChangeTitle={onChangeTitle}
        onDestroy={onDestroy}
      />
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  })).isRequired,
  onChangeCompleted: PropTypes.func.isRequired,
  onChangeTitle: PropTypes.func.isRequired,
  onDestroy: PropTypes.func.isRequired,
};
