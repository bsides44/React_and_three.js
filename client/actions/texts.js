//This setups and formats the action objects we will send to the reducer.  It takes in an api
//request, then dispatches it to another action creator which will send it then to the reducer

import request from 'superagent'

//When getPosts is called, make a request to /api/posts then take the return of that and dispatch it
//to our receivePosts action-creator
export function getTexts () {
  return dispatch => {
    request
      .get('/api/v1/texts')
      .then(res => {
	dispatch(receiveTexts(res.body))
      })
  }
}

//Take our posts given by getPosts and attach them to our action form that we send to the
//reducer--kinda like an attachment to an email.
export function receiveTexts (texts) {
  return {
      type: 'RECEIVE_TEXTS',
      texts
  }
}
