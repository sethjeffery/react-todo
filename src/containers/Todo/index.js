import { connect } from 'react-redux';
import * as components from '../../components/Todo';
import { addTodo, toggleTodo, setVisibilityFilter, VISIBILITY_FILTER } from '../../actions';

const onAddTodo = dispatch => text => {
  if (text) {
    dispatch(addTodo(text))
  }
}

const getVisibleTodos = (todos, filter) => {
  switch(filter) {
    case VISIBILITY_FILTER.TODO:
      return todos.filter(todo => !todo.get('checked'))
    default:
      return todos
  }
}

export const Todo = connect(
  function mapStateToProps(state) {
    return {
      todos: getVisibleTodos(state.todos, state.visibilityFilter),
      visibilityFilter: state.visibilityFilter
    }
  },
  function mapDispatchToProps(dispatch) {
    return {
      onAddTodo: onAddTodo(dispatch),
      onToggleTodo: id => dispatch(toggleTodo(id)),
      onSetVisibilityFilter: filter => dispatch(setVisibilityFilter(filter))
    }
  }
)(components.Todo);

export default Todo
