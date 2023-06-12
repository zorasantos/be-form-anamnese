import { VerifyTokenController } from './VerifyTokenController'
import { VerifyTokenUseCase } from './VerifyTokenUseCase'
import { AuthTokenAdapter } from '@infra/adapters/cryptography/authTokenAdapter'

export const VerifyTokenFactory = (): VerifyTokenController => {
  const authAdapter = new AuthTokenAdapter()
  const useCase = new VerifyTokenUseCase(authAdapter)
  const controller = new VerifyTokenController(useCase)

  return controller
}
