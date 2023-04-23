import { PersonalDataRepository } from '../infra/repository/PersonalDataRepository'
import { CreatePersonalController } from './CreatePersonalController'
import { CreatePersonalDataUseCase } from './CreatePersonalDataUseCase'

export const CreatePersonalDataFactory = (): CreatePersonalController => {
  const repository = new PersonalDataRepository()
  const useCase = new CreatePersonalDataUseCase(repository)
  const controller = new CreatePersonalController(useCase)

  return controller
}
