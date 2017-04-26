import React from 'react';
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'
import {List} from 'material-ui/List'

export const TodoList = ({
  todos,
  onTodoClick,
  onAddTodoClick
}) => (
  <div>
    <List>
      {todos.map(todo =>
        <TodoItem
          key={todo.id}
          text={todo.text}
          date={todo.date && todo.date.toString()}
          onClick={() => onTodoClick(todo.id)}
          checked={todo.checked}
          />
      )}
    </List>
  </div>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number.isRequired, text: PropTypes.string })).isRequired,
  onTodoClick: PropTypes.func,
  onAddTodoClick: PropTypes.func
}

export default TodoList
