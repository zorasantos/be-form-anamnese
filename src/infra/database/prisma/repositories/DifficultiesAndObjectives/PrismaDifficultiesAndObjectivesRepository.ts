import { DifficultiesAndObjectives } from '@application/modules/DifficultiesAndObjectives/Entities/DifficultiesAndObjectives'
import { IDifficultiesAndObjectivesRepository } from '@application/modules/DifficultiesAndObjectives/repository/IDifficultiesAndObjectivesRepository'
import { PrismaDifficultiesAndObjectivesMapper } from '../../mappers/prismaDifficultiesAndObjectivesMapper'
import { prismaClient } from '../../prismaClient'

export class PrismaDifficultiesAndObjectivesRepository
  implements IDifficultiesAndObjectivesRepository
{
  async create(data: DifficultiesAndObjectives): Promise<void> {
    const raw = PrismaDifficultiesAndObjectivesMapper.toPrisma(data)
    await prismaClient.difficultiesAndObjectives.create({
      data: raw,
    })
  }
}
