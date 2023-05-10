import { PersonalDataRepository } from '../../../../../infra/database/prisma/repositories/PersonalData/PersonalDataRepository'
import { CreatePersonalDataController } from './CreatePersonalDataController'
import { CreatePersonalDataUseCase } from './CreatePersonalDataUseCase'

export const CreatePersonalDataFactory = (): CreatePersonalDataController => {
  const repository = new PersonalDataRepository()
  const useCase = new CreatePersonalDataUseCase(repository)
  const controller = new CreatePersonalDataController(useCase)

  return controller
}
