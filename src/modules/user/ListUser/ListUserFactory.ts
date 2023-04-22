import { UserRepository } from '../infra/UserRepository'
import { ListUserController } from './ListUserController'
import { ListUserUseCase } from './ListUserUseCase'

export const ListUserFactory = (): ListUserController => {
  const repository = new UserRepository()
  const useCase = new ListUserUseCase(repository)
  const controller = new ListUserController(useCase)

  return controller
}
