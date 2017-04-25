import { connect } from 'react-redux'
import * as components from '../../components/Todo/TodoListActions'
import { addTodo, toggleAddTodoModal } from '../../actions'

const TodoListActions = connect(
  function mapStateToProps(state) {
    return {
      modalOpen: state.addTodoModal.get('open')
    }
  },
  function mapDispatchToProps(dispatch) {
    return {
      onToggleDialog: () => dispatch(toggleAddTodoModal())
    }
  }
)(components.TodoListActions)

export default TodoListActions
