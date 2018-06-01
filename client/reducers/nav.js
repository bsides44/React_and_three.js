export function navFlipReducer (state = false, action) {
  switch (action.type) {
    case 'FLIP_NAV':
      return action.navVisible
    default:
      return state
  }
}

export function navMenuReducer (state = false, action) {
  switch (action.type) {
    case 'OPEN_NAV':
      return action.navOpen
    case 'CLOSE_NAV':
      return action.navOpen
    default:
      return state
  }
}
