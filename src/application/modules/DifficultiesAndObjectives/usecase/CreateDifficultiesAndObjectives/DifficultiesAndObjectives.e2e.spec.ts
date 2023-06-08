import { prismaClient } from '@infra/database/prisma/prismaClient'
import { appExpress, closeAppExpress } from '@infra/ports/express'
import { personalData, difficultData } from '@shared/helper/Mocks'
import request from 'supertest'

describe('Difficulties And Objectives', () => {
  let personalDataId: string

  beforeEach(async () => {
    await request(appExpress).post('/v1/form/personal').send(personalData)
    const result = await prismaClient.personalData.findFirst()
    personalDataId = result?.id as string
  })

  afterAll(() => {
    closeAppExpress.close()
  })
  test('Should be able to create new Difficulties And Objectives data successfully', async () => {
    const data = { ...difficultData, personalDataId }

    const response = await request(appExpress)
      .post('/v1/form/difficult')
      .send(data)

    expect(response.status).toBe(201)
    expect(response.body.error).toBeFalsy()
  })

  test('Should be able to return an error if the difficultFirst field is not provided.', async () => {
    const newData = { ...difficultData, difficultFirst: '' }

    const response = await request(appExpress)
      .post('/v1/form/difficult')
      .send(newData)

    expect(response.status).toBe(400)
    expect(response.body.message).toEqual(
      'Difficult first field cannot be empty!',
    )
  })
})
