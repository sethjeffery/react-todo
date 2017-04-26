import reducer from './app';
import { combineReducers } from 'redux'

describe('with unknown action', () => {
  it('returns same state', () => {
    const oldState = {
      todos: 'SOMETHING',
      visibilityFilter: 'SOMETHING',
      addTodoModal: 'SOMETHING',
      drawerOpen: 'SOMETHING'
    }
    expect(reducer(oldState, { type: 'UNKNOWN_ACTION' })).toEqual(oldState)
  })
})

describe('by default', () => {
  it('returns default state', () => {
    const defaultState = {
      todos: [],
      visibilityFilter: 'VISIBILITY_FILTER.ALL',
      addTodoModal: { open: false },
      drawerOpen: false
    }
    expect(reducer(undefined, {})).toEqual(defaultState)
  })
})

describe('ADD_TODO', () => {
  it('adds a new todo with incrementing ID', () => {
    const firstState = [{ id: 0, text: 'First', date: '2010-01-01', checked: false }]
    const secondState = [{ id: 0, text: 'First', date: '2010-01-01', checked: false }, { id: 1, text: 'Second', date: undefined, checked: false }]
    expect(
      reducer(undefined, { type: 'ADD_TODO', text: 'First', date: '2010-01-01' }).todos
    ).toEqual(firstState)
    expect(
      reducer({ todos: firstState }, { type: 'ADD_TODO', text: 'Second' }).todos
    ).toEqual(secondState)
  })

  it('closes the modal', () => {
    const firstState = { open: true }
    const secondState = { open: false }
    expect(
      reducer({ addTodoModal: firstState }, { type: 'ADD_TODO', text: 'First' }).addTodoModal
    ).toEqual(secondState)
  })
})

describe('TOGGLE_TODO', () => {
  it('toggles a todo by id', () => {
    const firstState = [{ id: 0, text: 'First', checked: false }, { id: 1, text: 'Second', checked: false }]
    const checkedFirst = [{ id: 0, text: 'First', checked: true }, { id: 1, text: 'Second', checked: false }]
    const checkedSecond = [{ id: 0, text: 'First', checked: false }, { id: 1, text: 'Second', checked: true }]

    expect(
      reducer({ todos: firstState }, { type: 'TOGGLE_TODO', id: 0 }).todos
    ).toEqual(checkedFirst)

    expect(
      reducer({ todos: checkedFirst }, { type: 'TOGGLE_TODO', id: 0 }).todos
    ).toEqual(firstState)

    expect(
      reducer({ todos: firstState }, { type: 'TOGGLE_TODO', id: 1 }).todos
    ).toEqual(checkedSecond)
  })
})

describe('SET_VISIBILITY_FILTER', () => {
  it('can set a new filter', () => {
    expect(
      reducer(undefined, { type: 'SET_VISIBILITY_FILTER', filter: 'NEW' }).visibilityFilter
    ).toEqual('NEW')
  })
})

describe('TOGGLE_ADD_TODO_MODAL', () => {
  it('opens and closes the modal', () => {
    const initialState = reducer(undefined, { type: 'ANYTHING' })
    const firstState = reducer(initialState, { type: 'TOGGLE_ADD_TODO_MODAL' })
    const secondState = reducer(firstState, { type: 'TOGGLE_ADD_TODO_MODAL' })
    expect(initialState.addTodoModal).toEqual({ open: false })
    expect(firstState.addTodoModal).toEqual({ open: true })
    expect(secondState.addTodoModal).toEqual({ open: false })
  })
})

describe('TOGGLE_DRAWER', () => {
  it('opens and closes the drawer', () => {
    const initialState = reducer(undefined, { type: 'ANYTHING' })
    const firstState = reducer(initialState, { type: 'TOGGLE_DRAWER' })
    const secondState = reducer(firstState, { type: 'TOGGLE_DRAWER' })
    expect(initialState.drawerOpen).toEqual(false)
    expect(firstState.drawerOpen).toEqual(true)
    expect(secondState.drawerOpen).toEqual(false)
  })

  it('can be explicit', () => {
    const initialState = reducer(undefined, { type: 'ANYTHING' })
    const firstState = reducer(initialState, { type: 'TOGGLE_DRAWER', open: false })
    const secondState = reducer(firstState, { type: 'TOGGLE_DRAWER', open: true })
    expect(initialState.drawerOpen).toEqual(false)
    expect(firstState.drawerOpen).toEqual(false)
    expect(secondState.drawerOpen).toEqual(true)
  })
})
