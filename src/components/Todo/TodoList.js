import React from 'react';
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'
import {List, makeSelectable} from 'material-ui/List'
import moment from 'moment'
import TodoDetails from './TodoDetails'
import TodoPropType from './TodoPropType'
import './TodoList.css'

const SelectableList = makeSelectable(List)

export const TodoList = ({
  todos,
  onTodoClick,
  onShowTodoDetails,
  onHideTodoDetails
}) => {
  const selectedTodo = todos.find(todo => todo.selected)

  return (
    <div className='TodoListContainer'>
      <SelectableList className='TodoList' style={{paddingBottom: '80px'}}>
        {todos.map(todo =>
          <TodoItem
            key={todo.id}
            text={todo.text}
            date={todo.date && moment(todo.date).calendar().split(" at")[0]}
            onClick={() => onTodoClick(todo.id)}
            onShowDetails={() => onShowTodoDetails(todo.id)}
            checked={todo.checked}
            />
        )}
      </SelectableList>
      <TodoDetails todo={selectedTodo} onHideTodoDetails={onHideTodoDetails} />
    </div>
  )
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(TodoPropType).isRequired,
  selectedTodo: TodoPropType,
  onTodoClick: PropTypes.func.isRequired,
  onShowTodoDetails: PropTypes.func.isRequired
}

export default TodoList
