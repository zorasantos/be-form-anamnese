import { appExpress, closeAppExpress } from '@infra/ports/express'
import { loginData, personalData, signUpData } from '@shared/helper/Mocks'
import request from 'supertest'

describe('Personal data', () => {
  let token: string
  beforeEach(async () => {
    await request(appExpress).post('/v1/form/signup').send(signUpData)

    const resLogin = await request(appExpress)
      .post('/v1/form/session')
      .send(loginData)

    token = resLogin.body.token
  })

  afterAll(() => {
    closeAppExpress.close()
  })
  test('Should be able to create new personal data successfully', async () => {
    const response = await request(appExpress)
      .post('/v1/form/personal')
      .send(personalData)
      .set({ Authorization: token })

    expect(response.status).toBe(201)
    expect(response.body.error).toBeFalsy()
  })

  test('Should be able to return an error if the name field is not provided.', async () => {
    const newData = { ...personalData, name: '' }

    const response = await request(appExpress)
      .post('/v1/form/personal')
      .send(newData)
      .set({ Authorization: token })

    expect(response.status).toBe(400)
    expect(response.body.message).toEqual('Name field cannot be empty!')
  })
})
