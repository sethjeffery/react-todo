import { addTodo, toggleTodo, setVisibilityFilter, ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER } from './index';

describe('addTodo', () => {
  it('generates an ADD_TODO action', () => {
    const expected = { type: ADD_TODO, text: 'Hello', date: '2010-01-01' }
    expect(addTodo({ text: 'Hello', date: '2010-01-01' })).toEqual(expected)
  })
})

describe('toggleTodo', () => {
  it('generates a TOGGLE_TODO action', () => {
    const expected = { type: TOGGLE_TODO, id: 1 }
    expect(toggleTodo(1)).toEqual(expected)
  })
})

describe('setVisibilityFilter', () => {
  it('generates a SET_VISIBILITY_FILTER action', () => {
    const expected = { type: SET_VISIBILITY_FILTER, filter: 'SHOW_ALL' }
    expect(setVisibilityFilter('SHOW_ALL')).toEqual(expected)
  })
})
