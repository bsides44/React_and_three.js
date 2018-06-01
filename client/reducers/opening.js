//set state to opening when going to production.
function openingReducer (state = 'opening', action) {
  switch (action.type) {
    case 'ENTER_SITE':
    return action.destination
    default:
    return state
  }
}

export default openingReducer
// state is initialised as 'opening' becasue we want the user to always access the site through the opening sequence.
