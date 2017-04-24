import React from 'react';
import AppBar from 'material-ui/AppBar'
import {indigo900} from 'material-ui/styles/colors'
import Todo from '../containers/Todo'
import About from './About'
import { Route } from 'react-router'
import ScrollToTop from './ScrollToTop'
import Drawer from 'material-ui/Drawer'
import IconButton from 'material-ui/IconButton'
import NavigationClose from 'material-ui/svg-icons/navigation/close'
import MenuItem from 'material-ui/MenuItem'
import InfoOutline from 'material-ui/svg-icons/action/info-outline'
import List from 'material-ui/svg-icons/action/list'

export const App = ({
  onClickIndex,
  onClickAbout,
  drawerOpen,
  onToggleDrawer
}) => (
  <ScrollToTop>
    <div>
      <AppBar
        title="Todo List"
        style={{ backgroundColor: indigo900}}
        onLeftIconButtonTouchTap={onToggleDrawer}
      />
      <Drawer
        width={300}
        open={drawerOpen}
        docked={false}
        onRequestChange={(open) => onToggleDrawer({open})}
        >
        <AppBar
          title="Todo List"
          iconElementLeft={<IconButton><NavigationClose /></IconButton>}
          onLeftIconButtonTouchTap={onToggleDrawer}
          />
          <MenuItem leftIcon={<List />} onClick={onClickIndex}>View Todos</MenuItem>
          <MenuItem leftIcon={<InfoOutline />} onClick={onClickAbout}>About</MenuItem>
      </Drawer>
      <Route exact path="/" component={Todo} />
      <Route path="/about" component={About} />
    </div>
  </ScrollToTop>
)

export default App
