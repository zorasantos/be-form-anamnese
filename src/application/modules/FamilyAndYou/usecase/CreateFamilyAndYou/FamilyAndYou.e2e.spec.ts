import { prismaClient } from '@infra/database/prisma/prismaClient'
import { appExpress, closeAppExpress } from '@infra/ports/express'
import { familyAndYouData, personalData } from '@shared/helper/Mocks'
import request from 'supertest'

describe('Family and You', () => {
  let personalDataId: string

  beforeEach(async () => {
    await request(appExpress).post('/v1/form/personal').send(personalData)
    const result = await prismaClient.personalData.findFirst()
    personalDataId = result?.id as string
  })

  afterAll(() => {
    closeAppExpress.close()
  })
  test('Should be able to create new Family and You data successfully', async () => {
    const data = { ...familyAndYouData, personalDataId }

    const response = await request(appExpress)
      .post('/v1/form/family')
      .send(data)

    expect(response.status).toBe(201)
    expect(response.body.error).toBeFalsy()
  })

  test('Should be able to return an error if the placeOfBirth field is not provided.', async () => {
    const newData = {
      ...familyAndYouData,
      personalDataId,
      placeOfBirth: '',
    }

    const response = await request(appExpress)
      .post('/v1/form/family')
      .send(newData)

    expect(response.status).toBe(400)
    expect(response.body.message).toEqual(
      'Place Of birth field cannot be empty!',
    )
  })
})
