export function textReducer (state={}, action) {
  switch (action.type) {
    case 'RECEIVE_TEXT':
      return action.text
    case 'CLEAR_TEXT':
      return action.text
    default:
      return state
  }
}

export function indexReducer (state=0, action) {
  switch (action.type) {
    case 'RECEIVE_TEXT':
        return 0
    case 'INCREASE_INDEX':
        return state + 1
    case 'DECREASE_INDEX':
        return state - 1
    default:
      return state
  }
}

