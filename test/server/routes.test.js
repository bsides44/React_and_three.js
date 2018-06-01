const request = require('supertest')

jest.mock('../../server/db/texts', () => ({
  getTexts: () => Promise.resolve([
    {id: 1, name: 'test text 1'},
    {id: 2, name: 'test text 2'}
  ])
}))

const server = require('../../server/server')

test('GET /', () => {
  return request(server)
    .get('/api/v1/texts')
    .expect(200)
    .then(res => {
      expect(res.body.length).toBe(2)
    })
    .catch(err => {
      expect(err).toBeFalsy()
    })
})
