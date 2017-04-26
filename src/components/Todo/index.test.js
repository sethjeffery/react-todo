import ReactDOM from 'react-dom'
import React from 'react'
import Todo from './index'
import Provider from '../Provider';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider>
      <Todo todos={[]} onToggleTodo={() => {}} onAddTodo={() => {}} onSetVisibilityFilter={() => {}} visibilityFilter='ALL' />
    </Provider>, div);
});
