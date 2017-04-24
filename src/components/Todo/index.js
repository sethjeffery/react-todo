import React from 'react';
import TodoList from './TodoList';
import TodoListActions from '../../containers/Todo/TodoListActions';
import TodoListTabs from './TodoListTabs';

export const Todo = ({
  todos,
  toggleTodo,
  addTodo,
  visibilityFilter,
  setVisibilityFilter
}) => (
  <div>
    <TodoListTabs visibilityFilter={visibilityFilter} setVisibilityFilter={setVisibilityFilter} />
    <TodoListActions onAddTodoClick={addTodo} />
    <TodoList todos={todos} onTodoClick={toggleTodo} />
  </div>
)

export default Todo
