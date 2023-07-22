import {
  DifficultiesAndObjectives,
  IDifficultiesAndObjectives
} from '../../Entities/DifficultiesAndObjectives'
import { IDifficultiesAndObjectivesRepository } from '../../repository/IDifficultiesAndObjectivesRepository'

interface IDifficultiesAndObjectivesRequest
  extends IDifficultiesAndObjectives {}

export class CreateDifficultiesAndObjectivesUseCase {
  constructor(private repository: IDifficultiesAndObjectivesRepository) {}

  async execute(request: IDifficultiesAndObjectivesRequest): Promise<void> {
    const {
      difficultFirst,
      difficultSecond,
      difficultThird,
      objective,
      personalDataId
    } = request
    const data = new DifficultiesAndObjectives({
      personalDataId,
      difficultFirst,
      difficultSecond,
      difficultThird,
      objective
    })

    const result = await this.repository.create(data)

    return result
  }
}
