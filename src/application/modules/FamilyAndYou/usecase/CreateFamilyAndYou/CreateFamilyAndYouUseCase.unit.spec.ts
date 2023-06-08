import { familyAndYouData } from '@shared/helper/Mocks/familyAndYou'
import { CreateFamilyAndYouUseCase } from './CreateFamilyAndYouUseCase'
import { InMemoryFamilyAndYouRepository } from '@infra/database/prisma/repositories/FamilyAndYou/InMemoryFamilyAndYouRepository'

describe('Family and you', () => {
  test('should be able to send Family and you data', async () => {
    const repository = new InMemoryFamilyAndYouRepository()
    const family = new CreateFamilyAndYouUseCase(repository)

    const result = await family.execute(familyAndYouData)
    expect(result).toBe(undefined)
  })
})
