import { difficultiesAndObjectivesRepository } from '@infra/database'
import { CreateDifficultiesAndObjectivesController } from './CreateDifficultiesAndObjectivesController'
import { CreateDifficultiesAndObjectivesUseCase } from './CreateDifficultiesAndObjectivesUseCase'

export const CreateDifficultiesAndObjectivesFactory =
  (): CreateDifficultiesAndObjectivesController => {
    const useCase = new CreateDifficultiesAndObjectivesUseCase(
      difficultiesAndObjectivesRepository,
    )
    const controller = new CreateDifficultiesAndObjectivesController(useCase)

    return controller
  }
