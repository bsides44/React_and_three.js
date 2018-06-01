const request = require('supertest')

const env = require('./test-environment')
const textsDb = require('../../server/db/texts')

// Manage the test database

let testDb = null
beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})
afterEach(() => env.cleanup(testDb))

// Tests

test('read texts db', () => {
  return textsDb.getTexts(testDb)
    .then(texts=> {
      expect(texts.length).toBe(1)
      expect(texts[0].hasOwnProperty('name')).toBeTruthy()
    })
})
