import React from 'react'
import ReactDOM from 'react-dom'
import Provider from './components/Provider'
import { createStore, applyMiddleware, compose } from 'redux'
import reducers from './reducers'
import { routerMiddleware, ConnectedRouter as Router } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import App from './containers/App';
import './reset.css'
import './index.css'

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const historyMiddleware = routerMiddleware(history)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// Build the redux store
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(historyMiddleware))
)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
