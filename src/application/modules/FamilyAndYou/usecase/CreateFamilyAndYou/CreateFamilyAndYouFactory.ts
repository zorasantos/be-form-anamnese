import { familyRepository } from '@infra/database'
import { CreateFamilyAndYouController } from './CreateFamilyAndYouController'
import { CreateFamilyAndYouUseCase } from './CreateFamilyAndYouUseCase'

export const CreateFamilyAndYouFactory = (): CreateFamilyAndYouController => {
  const useCase = new CreateFamilyAndYouUseCase(familyRepository)
  const controller = new CreateFamilyAndYouController(useCase)

  return controller
}
