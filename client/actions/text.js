import request from 'superagent'


export function getTextByURL (url) {
  return dispatch => {
    request
      .get('/api/v1/texts'+'/'+url)
      .then(res => {
	dispatch(receiveText(res.body))
      })
  }
}

export function clearText () {
  return {
    type: 'CLEAR_TEXT',
    text: {}
  }
}

//action
export function receiveText (text) {
  return {
      type: 'RECEIVE_TEXT',
      text
  }
}

export function increaseIndex() {
  return {
    type: 'INCREASE_INDEX'
  }
}

export function decreaseIndex() {
  return {
    type: 'DECREASE_INDEX'
  }
}
