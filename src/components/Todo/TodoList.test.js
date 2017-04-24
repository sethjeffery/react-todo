import ReactDOM from 'react-dom'
import React from 'react'
import TodoList from './TodoList'
import { fromJS } from 'immutable'
import Provider from '../Provider'

it('renders without crashing', () => {
  const div = document.createElement('div');
  const todos = fromJS([{ id: 0, text: 'Hello' }])
  ReactDOM.render(
    <Provider>
      <TodoList todos={todos} />
    </Provider>
    , div);
});
