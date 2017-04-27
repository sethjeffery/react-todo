export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const TOGGLE_ADD_TODO_MODAL = 'TOGGLE_ADD_TODO_MODAL'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
export const TOGGLE_DRAWER = 'TOGGLE_DRAWER'
export const SHOW_TODO_DETAILS = 'SHOW_TODO_DETAILS'
export const HIDE_TODO_DETAILS = 'HIDE_TODO_DETAILS'
export const VISIBILITY_FILTER = {
  ALL: 'VISIBILITY_FILTER.ALL',
  TODO: 'VISIBILITY_FILTER.TODO'
}

export const addTodo = ({ text, date }) => {
  return {
    type: ADD_TODO,
    text: text,
    date: date
  }
}

export const toggleTodo = id => {
  return {
    type: TOGGLE_TODO,
    id: id
  }
}

export const setVisibilityFilter = filter => {
  return {
    type: SET_VISIBILITY_FILTER,
    filter: filter
  }
}

export const toggleAddTodoModal = () => {
  return {
    type: TOGGLE_ADD_TODO_MODAL
  }
}

export const toggleDrawer = () => {
  return {
    type: TOGGLE_DRAWER
  }
}

export const showTodoDetails = id => {
  return {
    type: SHOW_TODO_DETAILS,
    id: id
  }
}

export const hideTodoDetails = () => {
  return {
    type: HIDE_TODO_DETAILS
  }
}
