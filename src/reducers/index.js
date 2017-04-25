import { List, Map } from 'immutable'
import { combineReducers } from 'redux'
import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, VISIBILITY_FILTER, TOGGLE_ADD_TODO_MODAL, TOGGLE_DRAWER } from '../actions'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'

const newId = (state) => {
  const maxId = state.map(item => item.get('id')).max()
  return typeof(maxId) === 'undefined' ? 0 : maxId + 1
}

const todo = (state, action) => {
  switch(action.type) {
    case ADD_TODO:
      return Map({
        id: newId(state),
        text: action.text,
        checked: false
      })
    case TOGGLE_TODO:
      if (state.get('id') !== action.id) {
        return state
      } else {
        return state.set('checked', !state.get('checked'))
      }
    default:
      return state
  }
}

const todos = (state = List(), action) => {
  switch(action.type) {
    case ADD_TODO:
      return state.push(todo(state, action))
    case TOGGLE_TODO:
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

const addTodoModal = (state = Map({ open: false }), action) => {
  switch(action.type) {
    case TOGGLE_ADD_TODO_MODAL:
      return state.set('open', !state.get('open'))
    case ADD_TODO:
      return state.set('open', false)
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

const reducers = combineReducers({ todos, visibilityFilter, addTodoModal, drawerOpen, formReducer, routing: routerReducer })
export default reducers
