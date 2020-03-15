// describe, lets you wrap tests under one place, for organization
// it lets you run a test
// expect lets you perform assertions (is x equal to y)

const app = require('./API.js') // Link to your server file
const supertest = require('supertest')
const request = supertest(app)

//reference to you app.js file


//==================== Basic API test ====================

/**
 * Testing get newspaper topic climate
 */

describe('Basic API Test', () => {

  it('topic input gets a response', async done => {
    const response = await request.get('/climate')
      expect(response.status).toBe(200)
      expect(response.body).toBeDefined()

        done()
})
})