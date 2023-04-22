import { IUserRepository } from '../infra/IUserRepository'
import { IListUserDTO } from './IListUserDTO'

export class ListUserUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor(private userRepository: IUserRepository) {}

  async execute(): Promise<IListUserDTO[] | null> {
    const result = await this.userRepository.list()
    return result
  }
}
