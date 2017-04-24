import reducer from './index';
import { fromJS } from 'immutable'
import { combineReducers } from 'redux'

describe('with unknown action', () => {
  it('returns same state', () => {
    const oldState = { todos: fromJS([{ id: 0 }]), visibilityFilter: 'VISIBILITY_FILTER.ALL', addTodoModal: fromJS({ open: false }), routing: {"location": null}, drawerOpen: false }
    expect(reducer(oldState, { type: 'UNKNOWN_ACTION' })).toEqual(oldState)
  })
})

describe('by default', () => {
  it('returns default state', () => {
    const defaultState = { todos: fromJS([]), visibilityFilter: 'VISIBILITY_FILTER.ALL', addTodoModal: fromJS({ open: false }), routing: {"location": null}, drawerOpen: false }
    expect(reducer(undefined, {})).toEqual(defaultState)
  })
})

describe('ADD_TODO', () => {
  it('adds a new todo with incrementing ID', () => {
    const firstState = fromJS([{ id: 0, text: 'First', checked: false }])
    const secondState = fromJS([{ id: 0, text: 'First', checked: false }, { id: 1, text: 'Second', checked: false }])
    expect(
      reducer(undefined, { type: 'ADD_TODO', text: 'First' }).todos
    ).toEqual(firstState)
    expect(
      reducer({ todos: firstState }, { type: 'ADD_TODO', text: 'Second' }).todos
    ).toEqual(secondState)
  })

  it('closes the modal', () => {
    const firstState = fromJS({ open: true })
    const secondState = fromJS({ open: false })
    expect(
      reducer({ addTodoModal: firstState }, { type: 'ADD_TODO', text: 'First' }).addTodoModal
    ).toEqual(secondState)
  })
})

describe('TOGGLE_TODO', () => {
  it('toggles a todo by id', () => {
    const firstState = fromJS([{ id: 0, text: 'First', checked: false }, { id: 1, text: 'Second', checked: false }])
    const checkedFirst = fromJS([{ id: 0, text: 'First', checked: true }, { id: 1, text: 'Second', checked: false }])
    const checkedSecond = fromJS([{ id: 0, text: 'First', checked: false }, { id: 1, text: 'Second', checked: true }])

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
    expect(initialState.addTodoModal).toEqual(fromJS({ open: false }))
    expect(firstState.addTodoModal).toEqual(fromJS({ open: true }))
    expect(secondState.addTodoModal).toEqual(fromJS({ open: false }))
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
