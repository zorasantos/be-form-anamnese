import { describe, test } from 'node:test'
import assert from 'node:assert'
import { CreatePersonalDataUseCase } from './CreatePersonalDataUseCase'
import { InMemoryPersonalDataRepository } from '../../../../../infra/database/prisma/repositories/PersonalData/InMemoryPersonalDataRepository'

describe('Personal Data', () => {
  test('should be able to send personal data', async () => {
    const repository = new InMemoryPersonalDataRepository()
    const personalData = new CreatePersonalDataUseCase(repository)
    const data = {
      addressDetails: 'Ap 5',
      birthday: '01/01/1987',
      city: 'Fortaleza',
      gender: 'm',
      maritalStatus: 'solteiro',
      name: 'Zora',
      neighborhood: 'Jacarecanga',
      number: '123',
      occupation: 'Programador',
      religion: 'Cristão',
      state: 'ce',
      street: 'Rua Dom Quintino',
      zipCode: '60310500',
    }

    const result = await personalData.execute(data)
    assert.deepStrictEqual(result, undefined)
  })
})
