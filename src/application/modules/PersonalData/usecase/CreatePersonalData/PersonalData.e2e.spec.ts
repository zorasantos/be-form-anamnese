import { adapter, customSupertestRequest } from '@infra/adapters/appAdapter'

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
    adapter.listen()
  })

  afterEach(() => {
    adapter.close()
  })
  test('Create Personal Data', async () => {
    const response = await customSupertestRequest.post('/form/personal', data)

    expect(response.status).toBe(201)
    expect(response.body.error).toBeFalsy()
  })
})
