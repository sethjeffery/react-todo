import React from 'react';
import PropTypes from 'prop-types'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import Dialog from 'material-ui/Dialog'

export const TodoListActions = ({
  onAddTodo,
  onToggleDialog,
  modalOpen = false
}) => {
  let input;

  const dialogActions = [
      <FlatButton
        label="Cancel"
        onTouchTap={onToggleDialog}
      />,
      <FlatButton
        label="Submit"
        primary
        onTouchTap={() => { onAddTodo(input.input.value) }}
      />,
    ]

  return (
    <div>
      <FloatingActionButton
          secondary
          onClick={onToggleDialog}
          style={{position: 'absolute', bottom: '1rem', right: '1rem' }}>
        <ContentAdd />
      </FloatingActionButton>

      <Dialog title="Add todo item" actions={dialogActions} open={modalOpen} onRequestClose={onToggleDialog}>
        <TextField
          ref={node => { input = node }}
          name='add_todo'
          floatingLabelText="Name your todo item"
          style={{width: '100%'}} />
      </Dialog>
    </div>
  )
}

TodoListActions.propTypes = {
  onAddTodo: PropTypes.func.isRequired,
  onToggleDialog: PropTypes.func.isRequired,
  modalOpen: PropTypes.bool
}

export default TodoListActions
