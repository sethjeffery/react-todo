import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './index';
import Provider from '../../components/Provider'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider>
      <Todo />
    </Provider>, div);
});
