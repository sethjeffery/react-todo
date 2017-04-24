import { connect } from 'react-redux'
import * as components from '../../components/Todo/TodoListActions'
import { addTodo, toggleAddTodoModal } from '../../actions'

const TodoListActions = connect(
  function mapStateToProps(state) {
    return {
      visibilityFilter: state.visibilityFilter,
      modalOpen: state.addTodoModal.get('open')
    }
  },
  function mapDispatchToProps(dispatch) {
    return {
      onToggleDialog: () => dispatch(toggleAddTodoModal()),
      onAddTodo: text => dispatch(addTodo(text))
    }
  }
)(components.TodoListActions)

export default TodoListActions
