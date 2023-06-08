import { appExpress, closeAppExpress } from '@infra/ports/express'
import request from 'supertest'

const data = {
  personalDataId: 'aaaf862a-a01e-4a3a-95d8-ee3b3b85e5e1',
  difficultFirst: 'Só primeira dificuldade',
  difficultSecond: 'Segunda dificuldade',
  difficultThird: 'Terceira dificuldade',
  objective: 'Objetivo',
}

describe('Difficulties And Objectives', () => {
  afterAll(() => {
    closeAppExpress.close()
  })
  test('Should be able to create new Difficulties And Objectives data successfully', async () => {
    const response = await request(appExpress)
      .post('/v1/form/difficult')
      .send(data)
    expect(response.status).toBe(201)
    expect(response.body.error).toBeFalsy()
  })

  test('Should be able to return an error if the difficultFirst field is not provided.', async () => {
    const newData = { ...data, difficultFirst: '' }
    const response = await request(appExpress)
      .post('/v1/form/difficult')
      .send(newData)
    expect(response.status).toBe(400)
    expect(response.body.message).toEqual(
      'Difficult first field cannot be empty!',
    )
  })
})
