import React, { useCallback, useMemo, useState, useEffect } from 'react';
import { TodoApp } from './components/TodoApp';
import { TodoList } from './components/TodoList';
import { TodosFilter } from './components/TodosFilter';

function App() {
  const FILTERS = {
    all: 'all',
    active: 'active',
    completed: 'completed',
  };

  // eslint-disable-next-line max-len
  const todosList = localStorage.todosList ? JSON.parse(localStorage.todosList) : [];

  const [allDone, setAllDone] = useState(false);
  const [filter, setFilter] = useState(FILTERS.all);
  const [todos, setTodos] = useState(todosList);

  useEffect(() => {
    localStorage.todosList = JSON.stringify(todos);
  });

  const switchFilter = (status) => {
    if (filter === status) {
      return;
    }

    setFilter(status);
  };

  const addNewTodo = (newTodo) => {
    setTodos(prevTodos => [...prevTodos, newTodo]);
  };

  const changeCompleted = async(id, completed) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo,
          completed: !todo.completed };
      }

      return todo;
    });

    setTodos(updatedTodos);
  };

  const changeTitle = (id, title) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo,
          title };
      }

      return todo;
    });

    setTodos(updatedTodos);
  };

  const clearCompleted = async() => {
    const updatedTodos = todos.filter(todo => !todo.completed);

    setTodos(updatedTodos);
  };

  const visible = useCallback((items) => {
    switch (filter) {
      case FILTERS.active:
        return items.filter(todo => !todo.completed);

      case FILTERS.completed:
        return items.filter(todo => todo.completed);

      default:
        return items;
    }
  }, [filter, FILTERS.active, FILTERS.completed]);

  const itemsLeft = todos.filter(todo => !todo.completed).length;
  const visibleTodos = useMemo(() => visible(todos), [todos, visible]);

  const toggleAll = (e) => {
    setAllDone(e.target.checked);
    const updatedTodos = todos.map(todo => ({ ...todo,
      completed: e.target.checked }));

    setTodos(updatedTodos);
  };

  useEffect(() => {
    if (itemsLeft === 0) {
      setAllDone(true);
    } else {
      setAllDone(false);
    }
  }, [todos, itemsLeft]);

  const destroy = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);

    setTodos(updatedTodos);
  };

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <TodoApp
          onAddNewTodo={addNewTodo}
        />
      </header>

      <section className="main">
        <input
          type="checkbox"
          id="toggle-all"
          className="toggle-all"
          checked={allDone}
          onChange={toggleAll}
        />
        <label htmlFor="toggle-all">Mark all as complete</label>

        <TodoList
          todos={visibleTodos}
          onChangeCompleted={changeCompleted}
          onChangeTitle={changeTitle}
          onDestroy={destroy}
        />
      </section>

      {todos.length > 0 && (
        <footer className="footer">
          <span className="todo-count">
            {itemsLeft}
          </span>

          <TodosFilter
            onswitchFilter={switchFilter}
            FILTERS={FILTERS}
            filter={filter}
          />

            {todos.length - itemsLeft > 0 && (
            <button
              type="button"
              className="clear-completed"
              onClick={clearCompleted}
            >
              Clear completed
            </button>
            )}
        </footer>
      )}
    </section>
  );
}

export default App;
