import ReactDOM from 'react-dom'
import React from 'react'
import TodoItem from './TodoItem'
import Provider from '../Provider';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider>
      <TodoItem text='Hello' />
    </Provider>, div);
});
