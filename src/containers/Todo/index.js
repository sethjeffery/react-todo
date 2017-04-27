import { connect } from 'react-redux';
import * as components from '../../components/Todo';
import { addTodo, toggleTodo, setVisibilityFilter, showTodoDetails, hideTodoDetails, VISIBILITY_FILTER } from '../../actions';

const onAddTodo = dispatch => ({ text, date }) => {
  if (text) {
    dispatch(addTodo({ text, date }))
  }
}

const getVisibleTodos = (todos, filter) => {
  switch(filter) {
    case VISIBILITY_FILTER.TODO:
      return todos.filter(todo => !todo.checked)
    default:
      return todos
  }
}

export const Todo = connect(
  function mapStateToProps(state) {
    return {
      todos: getVisibleTodos(state.app.todos, state.visibilityFilter),
      visibilityFilter: state.app.visibilityFilter
    }
  },
  function mapDispatchToProps(dispatch) {
    return {
      onAddTodo: onAddTodo(dispatch),
      onToggleTodo: id => dispatch(toggleTodo(id)),
      onSetVisibilityFilter: filter => dispatch(setVisibilityFilter(filter)),
      onShowTodoDetails: id => dispatch(showTodoDetails(id)),
      onHideTodoDetails: () => dispatch(hideTodoDetails())
    }
  }
)(components.Todo);

export default Todo
