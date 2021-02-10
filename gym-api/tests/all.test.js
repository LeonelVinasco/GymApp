const request = require('supertest')
const app = require('../index')
let token;

describe('Post User Singnup/SignIn', () => {
  it('User dont exist', async () => {
    const res = await request(app)
      .post('/api/auth/signin')
      .send({
        username: 'admin',
        password: 'admin123',
      })
    expect(res.statusCode).toEqual(401)
  })

  it('Register new User', async () => {
    const res = await request(app)
      .post('/api/auth/signup')
      .send({
        "username": "admin",
        "password": "admin123",
        "email": "admin@test.com",
        "gym": "1",
        "admin": true  
      })
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('Message')
  })

  it('User exists', async () => {
    const res = await request(app)
      .post('/api/auth/signin')
      .send({
        username: 'admin',
        password: 'admin123',
      })
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('token')
    token=res.body.token
  })
})

describe('City Insert/GetCities', () => {
    it('No cities inserted yet', async () => {
      const res = await request(app)
        .get('/api/cities')
        expect(res.statusCode).toEqual(200)
        console.log(res.body)
    })

    it('Insert City', async () => {
      const res = await request(app)
        .post('/api/insert-city')
        .set('Authorization', 'Bearer '+token)
        .send({
           city: 'Neiva'
        })
      expect(res.statusCode).toEqual(200)
      expect(res.body).toEqual({"Message": "City created"})
    })

    it('Get Cities', async () => {
        const res = await request(app)
          .get('/api/cities')
          expect(res.statusCode).toEqual(200)
          console.log(res.body)
      })
  })

  describe('Gym Insert/GetGyms', () => {
    it('No Gyms inserted yet', async () => {
      const res = await request(app)
        .get('/api/gyms')
        expect(res.statusCode).toEqual(200)
        console.log(res.body)
        expect(res.body).toEqual({})
    })
    
    it('Insert Gym', async () => {
      const res = await request(app)
        .post('/api/insert-gym')
        .set('Authorization', 'Bearer '+token)
        .send({
           city: 1,
           gym: 'Sede la 53'
        })
      expect(res.statusCode).toEqual(200)
      expect(res.body).toEqual({"Message": "Gym created"})
    })

    it('Get Gyms', async () => {
        const res = await request(app)
          .get('/api/gyms')
          expect(res.statusCode).toEqual(200)
          console.log(res.body)
      })
  })
  
  describe('Gym Insert/GetGyms', () => {
    it('Get users list', async () => {
      const res = await request(app)
        .post('/api/list-users')
        .set('Authorization', 'Bearer '+token)
        .send({id:1})
        expect(res.statusCode).toEqual(200)
    })
  })