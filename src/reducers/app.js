import { combineReducers } from 'redux'
import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  VISIBILITY_FILTER,
  TOGGLE_ADD_TODO_MODAL,
  TOGGLE_DRAWER,
  SHOW_TODO_DETAILS,
  HIDE_TODO_DETAILS
} from '../actions'

const newId = (state) => {
  return state.length > 0 ? Math.max(...(state.map(item => item.id))) + 1 : 0
}

const todo = (state, action) => {
  switch(action.type) {
    case ADD_TODO:
      return {
        id: newId(state),
        text: action.text,
        date: action.date,
        checked: false
      }
    case TOGGLE_TODO:
      if (state.id === action.id) {
        return { ...state, checked: !state.checked }
      } else {
        return state
      }
    case SHOW_TODO_DETAILS:
      if (state.id === action.id) {
        return { ...state, selected: true }
      } else {
        return { ...state, selected: false }
      }
    case HIDE_TODO_DETAILS:
      return { ...state, selected: false }
    default:
      return state
  }
}

const todos = (state = [], action) => {
  switch(action.type) {
    case ADD_TODO:
      return [...state, todo(state, action)]
    case TOGGLE_TODO:
    case SHOW_TODO_DETAILS:
    case HIDE_TODO_DETAILS:
      return state.map(item => todo(item, action))
    default:
      return state
  }
}

const visibilityFilter = (state = VISIBILITY_FILTER.ALL, action) => {
  switch(action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

const addTodoModal = (state = { open: false }, action) => {
  switch(action.type) {
    case TOGGLE_ADD_TODO_MODAL:
      return { ...state, open: !state.open }
    case ADD_TODO:
      return { ...state, open: false }
    default:
      return state
  }
}

const drawerOpen = (state = false, action) => {
  switch(action.type) {
    case TOGGLE_DRAWER:
      if (typeof(action.open) === 'undefined')
        return !state
      else
        return action.open
    case '@@router/LOCATION_CHANGE':
      return false
    default:
      return state
  }
}

const app = combineReducers({ todos, visibilityFilter, addTodoModal, drawerOpen })
export default app
