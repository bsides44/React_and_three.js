function textsReducer (state=[], action) {
  switch (action.type) {
    case 'RECEIVE_TEXTS':
      return action.texts
    default:
      return state
  }
}

export default textsReducer
