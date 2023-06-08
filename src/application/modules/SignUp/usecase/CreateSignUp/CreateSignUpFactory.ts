import { signUpRepository } from '@infra/database'
import { CreateSignUpController } from './CreateSignUpController'
import { CreateSignUpUseCase } from './CreateSignUpUseCase'

export const CreateSignUpFactory = (): CreateSignUpController => {
  const useCase = new CreateSignUpUseCase(signUpRepository)
  const controller = new CreateSignUpController(useCase)

  return controller
}
