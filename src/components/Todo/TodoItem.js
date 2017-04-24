import React from 'react';
import PropTypes from 'prop-types'
import {ListItem} from 'material-ui/List'
import ToggleCheckBox from 'material-ui/svg-icons/toggle/check-box';
import ToggleCheckBoxOutlineBlank from 'material-ui/svg-icons/toggle/check-box-outline-blank';

const TodoItem = ({
  onClick,
  text,
  checked
}) => (
  <ListItem
    primaryText={text}
    leftIcon={checked ? <ToggleCheckBox /> : <ToggleCheckBoxOutlineBlank />}
    onClick={onClick}
    />
)

TodoItem.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
  checked: PropTypes.bool
}

export default TodoItem
