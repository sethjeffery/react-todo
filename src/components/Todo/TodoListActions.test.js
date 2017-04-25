import React from 'react';
import ReactDOM from 'react-dom';
import TodoListActions from './TodoListActions';
import Provider from '../Provider'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider>
      <TodoListActions onAddTodo={() => {}} onToggleDialog={() => {}} />
    </Provider>, div);
});
