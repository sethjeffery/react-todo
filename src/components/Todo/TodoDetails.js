import React from 'react';
import PropTypes from 'prop-types'
import Drawer from 'material-ui/Drawer'
import TodoPropType from './TodoPropType'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'
import DatePicker from 'material-ui/DatePicker'
import './TodoDetails.css'

const Details = ({
  todo,
  onSave,
  onCancel
}) => {
  let nameInput, dateInput

  const inputRef = node => {
    node && node.input && node.input.focus()
    nameInput = node
  }

  if (todo) {
    return (
      <div className='TodoDetails'>
        <div>
          <h2>
            {todo.text}
          </h2>
          <TextField
            ref={inputRef}
            value={todo.text}
            name='add_todo'
            floatingLabelText="Name"
            style={{width: '100%'}} />
          <DatePicker
            ref={node => dateInput = node }
            autoOk
            hintText="Deadline date" />
        </div>
        <div className='actions'>
          <FlatButton
            label="Save changes"
            primary
            onTouchTap={() => { onSave({ text: nameInput.input.value, date: dateInput.state.date }) }}
          />
          <FlatButton
            label="Cancel"
            onTouchTap={onCancel}
          />
        </div>
      </div>
    )
  } else {
    return <div></div>
  }
}

const TodoDetails = ({
  todo,
  onHideTodoDetails
}) => (
  <Drawer
    open={!!todo}
    openSecondary
    docked={false}
    onRequestChange={onHideTodoDetails}
    containerStyle={{width: '300px'}}
  >
    <Details todo={todo} />
  </Drawer>
)

TodoDetails.propTypes = {
  todo: TodoPropType,
  onHideTodoDetails: PropTypes.func
}

export default TodoDetails
