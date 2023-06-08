import { appExpress, closeAppExpress } from '@infra/ports/express'
import request from 'supertest'

describe('Sign Up', () => {
  afterAll(() => {
    closeAppExpress.close()
  })

  const data = {
    name: 'Test Name',
    birthday: '01/01/1987',
    password: '1234567890',
  }
  test('Should be able to create a new Sign Up successfully', async () => {
    const response = await request(appExpress)
      .post('/v1/form/signup')
      .send(data)

    expect(response.status).toBe(201)
    expect(response.body.error).toBeFalsy()
  })

  test('Should be able to return an error if the name field is not provided.', async () => {
    const newData = { ...data, name: '' }

    const response = await request(appExpress)
      .post('/v1/form/signup')
      .send(newData)

    expect(response.status).toBe(400)
    expect(response.body.message).toEqual('Name field cannot be empty!')
  })
})
