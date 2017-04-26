import React from 'react';
import TodoList from './TodoList';
import TodoListActions from '../../containers/Todo/TodoListActions';
import TodoListTabs from './TodoListTabs';
import PropTypes from 'prop-types'

export const Todo = ({
  todos,
  onToggleTodo,
  onAddTodo,
  visibilityFilter,
  onSetVisibilityFilter
}) => (
  <div>
    <TodoListTabs visibilityFilter={visibilityFilter} onSetVisibilityFilter={onSetVisibilityFilter} />
    <TodoListActions onAddTodo={onAddTodo} />
    <TodoList todos={todos} onTodoClick={onToggleTodo} />
  </div>
)

Todo.propTypes = {
  todos: PropTypes.array.isRequired,
  onToggleTodo: PropTypes.func.isRequired,
  onAddTodo: PropTypes.func.isRequired,
  visibilityFilter: PropTypes.string.isRequired,
  onSetVisibilityFilter: PropTypes.func.isRequired
}

export default Todo
