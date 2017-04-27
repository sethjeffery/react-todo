import ReactDOM from 'react-dom'
import React from 'react'
import TodoDetails from './TodoDetails'
import Provider from '../Provider';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const todo = { id: 0, text: 'Hello' }
  ReactDOM.render(
    <Provider>
      <TodoDetails todo={todo} />
    </Provider>, div);
});
