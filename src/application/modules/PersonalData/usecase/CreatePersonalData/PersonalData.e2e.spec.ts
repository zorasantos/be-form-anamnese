import 'dotenv/config'
import {
  createAppSupertestAdapter,
  appServer,
} from '@infra/adapters/supertestAdapter'
// import {
//   createExpressAdapter,
//   createFastifyAdapter,
// } from '@infra/adapters/appAdapter'

import { app as expressApp } from '@infra/ports/express'
// import { app as fastifyApp } from '@infra/ports/fastify'

// const serverType = process.env.SERVER_TYPE || 'express'

// const adapter =
//   serverType === 'fastify'
//     ? createFastifyAdapter(fastifyApp)
//     : createExpressAdapter(expressApp)

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
  let closeServer: any
  beforeEach(async () => {
    const server = expressApp.listen(3001, () => {
      console.log(`Express server Running in port ${3001}`)
    })

    closeServer = server
  })

  afterEach(async () => {
    await closeServer.close()
  })

  test('Create Personal Data', async () => {
    // const response = await request(app).post('/form/personal').send(data)
    console.log('appServer', appServer)

    const response = await createAppSupertestAdapter()
      .post('/form/personal')
      .send(data)
    expect(response.status).toBe(201)
    expect(response.body.error).toBeFalsy()
  })
})
