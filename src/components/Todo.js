import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const Todo = React.memo(
  ({ todo, onChangeCompleted, onChangeTitle, onDestroy }) => {
    const [isEditable, setIsEditable] = useState(false);
    const [newTitle, setNewTitle] = useState(todo.title);

    const saveTitle = () => {
      if (newTitle.trim() === todo.title.trim()) {
        setIsEditable(false);

        return;
      }

      if (newTitle.trim() === '') {
        setNewTitle(todo.title);
        setIsEditable(false);

        return;
      }

      onChangeTitle(todo.id, newTitle);
      setIsEditable(false);
    };

    const saveCancelTitle = (e) => {
      e.preventDefault();
      if (e.key === 'Enter') {
        saveTitle();
        e.preventDefault();
      }

      if (e.key === 'Escape') {
        setNewTitle(todo.title);
        setIsEditable(false);
      }
    };

    return (
      <li
        className={classNames({ completed: todo.completed,
          editing: isEditable })}
      >
        <div className="view">
          <input
            type="checkbox"
            className="toggle"
            checked={todo.completed}
            onChange={e => onChangeCompleted(todo.id, e.target.checked)}
          />
          <label
            onDoubleClick={(e) => {
              setIsEditable(true);
              e.preventDefault();
            }}
          >
            {todo.title}
          </label>
          <button
            type="button"
            className="destroy"
            onClick={() => onDestroy(todo.id)}
          />
        </div>
        <input
          type="text"
          className="edit"
          value={newTitle}
          onChange={e => setNewTitle(e.target.value)}
          onKeyUp={saveCancelTitle}
          onBlur={saveTitle}
          ref={(input) => {
            if (input !== null) {
              input.focus();
            }
          }}
        />
      </li>
    );
  },
);

Todo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  onChangeCompleted: PropTypes.func.isRequired,
  onChangeTitle: PropTypes.func.isRequired,
  onDestroy: PropTypes.func.isRequired,
};
