import { repository } from '@infra/database'
import { CreatePersonalDataController } from './CreatePersonalDataController'
import { CreatePersonalDataUseCase } from './CreatePersonalDataUseCase'

export const CreatePersonalDataFactory = (): CreatePersonalDataController => {
  const useCase = new CreatePersonalDataUseCase(repository)
  const controller = new CreatePersonalDataController(useCase)

  return controller
}
