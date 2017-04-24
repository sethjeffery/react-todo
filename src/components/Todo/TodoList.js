import React from 'react';
import TodoItem from './TodoItem'
import ImmutablePropTypes from 'react-immutable-proptypes'
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
          key={todo.get('id')}
          text={todo.get('text')}
          onClick={() => onTodoClick(todo.get('id'))}
          checked={todo.get('checked')}
          />
      )}
    </List>
  </div>
)

TodoList.propTypes = {
  todos: ImmutablePropTypes.listOf(ImmutablePropTypes.contains({ id: PropTypes.number.isRequired, text: PropTypes.string })).isRequired,
  onTodoClick: PropTypes.func,
  onAddTodoClick: PropTypes.func
}

export default TodoList
