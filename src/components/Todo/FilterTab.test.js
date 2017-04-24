import ReactDOM from 'react-dom'
import React from 'react'
import FilterTab from './FilterTab'
import Provider from '../Provider';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider>
      <FilterTab text='Hello' />
    </Provider>, div);
});
