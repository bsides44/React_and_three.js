

export function navigate (destination) {
  return {
      type: 'ENTER_SITE',
      destination
  }
}

//works like the navigate function in sweet as beers. destination is hard coded in to the function call on dispatch
