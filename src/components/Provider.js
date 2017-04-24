import React, { Component } from 'react';
import { createStore } from 'redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux'
import reducers from '../reducers'
import injectTapEventPlugin from 'react-tap-event-plugin';
import PropTypes from 'prop-types'

class AppProvider extends Component {
  componentWillMount() {
    // This is needed for setting up Material UI
    injectTapEventPlugin();
  }

  render() {
    // Wrap everything in a Redux provider, and Material UI provider
    return (
      <Provider store={this.props.store}>
        <MuiThemeProvider>
          {this.props.children}
        </MuiThemeProvider>
      </Provider>
    )
  }
}

AppProvider.defaultProps = {
  store: createStore(reducers)
}

AppProvider.propTypes = {
  store: PropTypes.object.isRequired
}

export default AppProvider
