import React from 'react';
import TodoList from './TodoList';
import TodoListActions from '../../containers/Todo/TodoListActions';
import TodoListTabs from './TodoListTabs';

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

export default Todo
