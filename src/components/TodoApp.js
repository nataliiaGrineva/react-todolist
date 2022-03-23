import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const TodoApp = React.memo(({ onAddNewTodo }) => {
  const [title, setTitle] = useState('');

  const submitTitle = (e) => {
    if (e.key === 'Enter') {
      if (title !== '') {
        const newTodo = {
          id: +new Date(),
          title,
          completed: false,
        };

        onAddNewTodo(newTodo);
        setTitle('');
      }

      e.preventDefault();
    }
  };

  return (
    <form>
      <input
        type="text"
        className="new-todo"
        placeholder="What needs to be done?"
        value={title}
        onChange={e => setTitle(e.target.value)}
        onKeyPress={submitTitle}
      />
    </form>
  );
});

TodoApp.propTypes = {
  onAddNewTodo: PropTypes.func.isRequired,
};
