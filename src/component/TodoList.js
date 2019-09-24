import React from 'react';

import PropTypes from 'prop-types';

import TodoItem from './TodoItem';

const _ = require('lodash');

const TodoList = ({
  todoListFiltered,
  toggleCompleteStatus,
  toggleRemoveTodo,
}) => (
  <ul className="todo-list">
    {
      todoListFiltered.map(todo => (
        <TodoItem
          todo={todo}
          toggleCompleteStatus={toggleCompleteStatus}
          toggleRemoveTodo={toggleRemoveTodo}
          key={_.uniqueId('todo-item_')}
        />
      ))
    }
  </ul>
);

TodoList.propTypes = {
  todoListFiltered: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      completed: PropTypes.bool,
    })
  ).isRequired,
  toggleCompleteStatus: PropTypes.func.isRequired,
  toggleRemoveTodo: PropTypes.func.isRequired,
};

export default TodoList;