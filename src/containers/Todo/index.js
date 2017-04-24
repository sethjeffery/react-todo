import { connect } from 'react-redux';
import * as components from '../../components/Todo';
import { addTodo, toggleTodo, setVisibilityFilter, VISIBILITY_FILTER } from '../../actions';

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
      addTodo: text => dispatch(addTodo(text)),
      toggleTodo: id => dispatch(toggleTodo(id)),
      setVisibilityFilter: filter => dispatch(setVisibilityFilter(filter))
    }
  }
)(components.Todo);

export default Todo
