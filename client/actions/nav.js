export function flipNav (navVisible) {
  return {
    type: 'FLIP_NAV',
    navVisible
  }
}

export function openNav () {
  return {
  type: 'OPEN_NAV',
  navOpen: true
  }
}

export function closeNav () {
  return {
    type: 'CLOSE_NAV',
    navOpen: false
  }
}

