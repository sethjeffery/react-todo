import PropTypes from 'prop-types'

const TodoPropType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  selected: PropTypes.bool
})

export default TodoPropType
