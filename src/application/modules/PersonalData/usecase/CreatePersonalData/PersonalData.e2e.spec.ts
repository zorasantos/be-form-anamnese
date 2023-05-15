import { app } from '@infra/ports/express'
// import { app } from '../../../../../infra/ports/express'
import request from 'supertest'

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

test('Create Personal Data', async () => {
  const response = await request(app).post('/form/personal').send(data)

  expect(response.status).toBe(201)
  expect(response.body.error).toBeFalsy()
})
