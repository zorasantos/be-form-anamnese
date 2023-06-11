import { signUpRepository } from '@infra/database'
import { GetTermsOfUseController } from './GetTemsOfUseController'
import { GetTermsOfUseUseCase } from './GetTermsOfUseUseCase'

export const GetTermsOfUseFactory = (): GetTermsOfUseController => {
  const useCase = new GetTermsOfUseUseCase(signUpRepository)
  const controller = new GetTermsOfUseController(useCase)

  return controller
}
