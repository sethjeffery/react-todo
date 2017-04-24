import React from 'react'
import ReactDOM from 'react-dom'
import TodoListTabs from './TodoListTabs'
import Provider from '../../components/Provider'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider>
      <TodoListTabs visibilityFilter='SHOW_ALL' setVisibilityFilter={() => {}} />
    </Provider>, div);
});
