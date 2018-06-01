import textsReducer from '../../client/reducers/texts'

test('Reducer Initial State', () => {
  const expected = []

  const actual = textsReducer(undefined, {})

  expect(actual).toEqual(expected)
})

test('RECEIVE_TEXTS', () => {
  const fakeTexts = [
    'Hello',
    'Howdy'
  ]
  const expected = [...fakeTexts]

  const action = {
    type: 'RECEIVE_TEXTS',
    texts: fakeTexts
  }

  const actual = textsReducer(undefined, action)

  expect(actual).toEqual(expected)
})
