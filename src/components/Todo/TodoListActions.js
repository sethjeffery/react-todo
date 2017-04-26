import React from 'react';
import PropTypes from 'prop-types'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import Dialog from 'material-ui/Dialog'
import DatePicker from 'material-ui/DatePicker'

export const TodoListActions = ({
  onAddTodo,
  onToggleDialog,
  modalOpen = false
}) => {
  let nameInput, dateInput;

  const dialogActions = [
      <FlatButton
        label="Cancel"
        onTouchTap={onToggleDialog}
      />,
      <FlatButton
        label="Submit"
        primary
        onTouchTap={() => { onAddTodo({ text: nameInput.input.value, date: dateInput.state.date }) }}
      />,
    ]

    const inputRef = node => {
      node && node.input && node.input.focus()
      nameInput = node
    }

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
          ref={inputRef}
          name='add_todo'
          floatingLabelText="Name your todo item"
          style={{width: '100%'}} />
        <DatePicker
          ref={node => dateInput = node }
          autoOk
          hintText="Deadline date" />
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
