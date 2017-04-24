import React, { Component } from 'react';
import { Route } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import Todo from '../containers/Todo';

const Routes = (props) => {
  const history = createHistory()

  return (
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={Todo} />
      </div>
    </ConnectedRouter>
  )
}

export default Routes
