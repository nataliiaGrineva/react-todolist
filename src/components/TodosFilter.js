import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const TodosFilter = React.memo(({ onswitchFilter, FILTERS, filter }) => (
  <ul className="filters">
    <li>
      <a
        href="#/"
        className={classNames({ selected: filter === FILTERS.all })}
        onClick={() => onswitchFilter(FILTERS.all)}
      >
        All
      </a>
    </li>

    <li>
      <a
        href="#/active"
        className={classNames({ selected: filter === FILTERS.active })}
        onClick={() => onswitchFilter(FILTERS.active)}
      >
        Active
      </a>
    </li>

    <li>
      <a
        href="#/completed"
        className={classNames({ selected: filter === FILTERS.completed })}
        onClick={() => onswitchFilter(FILTERS.completed)}
      >
        Completed
      </a>
    </li>
  </ul>
));

TodosFilter.propTypes = {
  onswitchFilter: PropTypes.func.isRequired,
  FILTERS: PropTypes.shape({
    all: PropTypes.string.isRequired,
    active: PropTypes.string.isRequired,
    completed: PropTypes.string.isRequired,
  }).isRequired,
  filter: PropTypes.string.isRequired,
};
