import React from 'react';
import PropTypes from 'prop-types'
import {ListItem} from 'material-ui/List'
import Checkbox from 'material-ui/Checkbox'
import IconButton from 'material-ui/IconButton'
import NavigationMoreHoriz from 'material-ui/svg-icons/navigation/more-horiz'

const TodoItem = ({
  onClick,
  onShowDetails,
  text,
  date,
  checked
}) => (
  <ListItem
    primaryText={text}
    secondaryText={date}
    leftCheckbox={<Checkbox checked={checked} onClick={onClick} />}
    rightIconButton={<IconButton onClick={onShowDetails}><NavigationMoreHoriz /></IconButton>}
    />
)

TodoItem.propTypes = {
  onClick: PropTypes.func,
  onShowDetails: PropTypes.func,
  text: PropTypes.string.isRequired,
  date: PropTypes.string,
  checked: PropTypes.bool
}

export default TodoItem
