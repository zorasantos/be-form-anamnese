import { DifficultiesAndObjectives } from '@application/modules/DifficultiesAndObjectives/Entities/DifficultiesAndObjectives'
import { IDifficultiesAndObjectivesRepository } from '@application/modules/DifficultiesAndObjectives/repository/IDifficultiesAndObjectivesRepository'

export class InMemoryDifficultiesAndObjectivesRepository
  implements IDifficultiesAndObjectivesRepository
{
  public personalData: DifficultiesAndObjectives[] = []

  async create(data: DifficultiesAndObjectives): Promise<void> {
    this.personalData.push(data)
  }
}
