import React from 'react';
import TodoList from './TodoList';
import TodoListActions from '../../containers/Todo/TodoListActions';
import TodoListTabs from './TodoListTabs';
import PropTypes from 'prop-types'
import ImmutablePropTypes from 'react-immutable-proptypes'

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
  todos: ImmutablePropTypes.listOf(ImmutablePropTypes.contains({ id: PropTypes.number.isRequired, text: PropTypes.string })).isRequired,
  onToggleTodo: PropTypes.func.isRequired,
  onAddTodo: PropTypes.func.isRequired,
  visibilityFilter: PropTypes.string.isRequired,
  onSetVisibilityFilter: PropTypes.func.isRequired
}

export default Todo
