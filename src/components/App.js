import React from 'react';
import AppBar from 'material-ui/AppBar'
import {indigo900} from 'material-ui/styles/colors'
import Todo from '../containers/Todo'
import About from './About'
import { Route } from 'react-router'
import ScrollToTop from './ScrollToTop'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import NavigationMoreVert from 'material-ui/svg-icons/navigation/more-vert'
import InfoOutline from 'material-ui/svg-icons/action/info-outline'
import './App.css'

export const App = ({
  onClickIndex,
  onClickAbout,
  drawerOpen,
  onToggleDrawer
}) => (
  <ScrollToTop>
    <div className='App'>
      <AppBar
        title="Todo List"
        style={{ backgroundColor: indigo900}}
        showMenuIconButton={false}
        iconElementRight={<IconMenu
          iconButtonElement={<IconButton><NavigationMoreVert /></IconButton>}
          targetOrigin={{horizontal: 'right', vertical: 'top'}}
          anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
        >
          <MenuItem primaryText="View Todos" onClick={onClickIndex} />
          <MenuItem primaryText="About"  onClick={onClickAbout} />
        </IconMenu>}
      />
      <Route exact path="/" component={Todo} />
      <Route path="/about" component={About} />
    </div>
  </ScrollToTop>
)

export default App
