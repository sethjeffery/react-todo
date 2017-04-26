import { connect } from 'react-redux'
import * as components from '../../components/Todo/TodoListActions'
import { toggleAddTodoModal } from '../../actions'

const TodoListActions = connect(
  function mapStateToProps(state) {
    return {
      modalOpen: state.app.addTodoModal.open
    }
  },
  function mapDispatchToProps(dispatch) {
    return {
      onToggleDialog: () => dispatch(toggleAddTodoModal())
    }
  }
)(components.TodoListActions)

export default TodoListActions
