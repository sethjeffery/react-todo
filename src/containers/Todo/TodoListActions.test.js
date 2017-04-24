import React from 'react';
import ReactDOM from 'react-dom';
import TodoListActions from './TodoListActions';
import Provider from '../../components/Provider'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider>
      <TodoListActions />
    </Provider>, div);
});
