import { signUpRepository } from '@infra/database'
import { SignInController } from './SignInController'
import { SignInUseCase } from './SignInUseCase'
import { EncryptAdapter } from '@infra/adapters/cryptography/encryptAdapter'
import { AuthTokenAdapter } from '@infra/adapters/cryptography/authTokenAdapter'

export const SignInFactory = (): SignInController => {
  const encryptAdapter = new EncryptAdapter()
  const authTokenAdapter = new AuthTokenAdapter()
  const useCase = new SignInUseCase(
    signUpRepository,
    encryptAdapter,
    authTokenAdapter
  )
  const controller = new SignInController(useCase)

  return controller
}
