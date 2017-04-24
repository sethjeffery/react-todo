import { connect } from 'react-redux';
import * as components from '../components/App';
import { push } from 'react-router-redux'
import { withRouter } from 'react-router-dom'
import { toggleDrawer } from '../actions'

export const App = withRouter(connect(
  function mapStateToProps(state) {
    return {
      drawerOpen: state.drawerOpen
    }
  },
  function mapDispatchToProps(dispatch) {
    return {
      onClickAbout: () => dispatch(push('/about')),
      onClickIndex: () => dispatch(push('/')),
      onToggleDrawer: () => dispatch(toggleDrawer())
    }
  }
)(components.App))

export default App
