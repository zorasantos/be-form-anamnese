import {
  adapter,
  CustomSupertestRequest,
} from '@infra/adapters/testIntegrationAdapter'

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
  beforeAll(async () => {
    await adapter.listen()
  })

  afterAll(async () => {
    await adapter.close()
  })
  test('Should be able to create new personal data successfully', async () => {
    const response = await CustomSupertestRequest.post(
      '/v1/form/personal',
      data,
    )
    expect(response.status).toBe(201)
    expect(response.body.error).toBeFalsy()
  })

  test('Should be able to return an error if the name field is not provided.', async () => {
    const newData = { ...data, name: '' }
    const response = await CustomSupertestRequest.post(
      '/v1/form/personal',
      newData,
    )
    expect(response.status).toBe(400)
    expect(response.body.message).toEqual('Name field cannot be empty!')
  })
})
