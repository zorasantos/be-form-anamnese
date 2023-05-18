import { repository } from '@infra/database/prisma/repositories/PersonalData'
import { CreatePersonalDataController } from './CreatePersonalDataController'
import { CreatePersonalDataUseCase } from './CreatePersonalDataUseCase'

export const CreatePersonalDataFactory = (): CreatePersonalDataController => {
  const useCase = new CreatePersonalDataUseCase(repository)
  const controller = new CreatePersonalDataController(useCase)

  return controller
}
