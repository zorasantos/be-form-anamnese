import { CreateDifficultiesAndObjectivesUseCase } from './CreateDifficultiesAndObjectivesUseCase'
import { InMemoryDifficultiesAndObjectivesRepository } from '@infra/database/prisma/repositories/DifficultiesAndObjectives/InMemoryDifficultiesAndObjectivesRepository'

describe('Difficulties And Objectives', () => {
  test('should be able to send Difficulties And Objectives data', async () => {
    const repository = new InMemoryDifficultiesAndObjectivesRepository()
    const difficultData = new CreateDifficultiesAndObjectivesUseCase(repository)
    const data = {
      personalDataId: 'aaaf862a-a01e-4a3a-95d8-ee3b3b85e5e1',
      difficultFirst: 'Só primeira dificuldade',
      difficultSecond: 'Segunda dificuldade',
      difficultThird: 'Terceira dificuldade',
      objective: 'Objetivo',
    }

    const result = await difficultData.execute(data)
    expect(result).toBe(undefined)
  })
})
