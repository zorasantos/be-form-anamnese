import request from 'supertest'

import { app as fastifyApp } from '@infra/ports/fastify'

const data = {
  name: 'Zora',
  addressDetails: 'Ap 5',
  birthday: '09/11/2016',
  city: 'Fortaleza',
  gender: 'm',
  maritalStatus: 'solteiro',
  neighborhood: 'Jacarecanga',
  number: '123',
  occupation: 'Programador',
  religion: 'Cristão',
  state: 'ce',
  street: 'Rua do avião',
  zipCode: '60310500',
}

describe('Personal data', () => {
  beforeEach(() => {
    fastifyApp.listen()
  })

  afterEach(() => {
    fastifyApp.close()
  })
  test('Create Personal Data', async () => {
    // const response = await request(app).post('/form/personal').send(data)

    const response = await request(fastifyApp.server)
      .post('/form/personal')
      .send(data)
    expect(response.status).toBe(201)
    expect(response.body.error).toBeFalsy()
  })
})
