import { IListUserDTO } from '../ListUser/IListUserDTO'
import { IUserRepository } from './IUserRepository'

export class UserRepository implements IUserRepository {
  async list(): Promise<IListUserDTO[] | null> {
    return Promise.resolve([
      { id: '1', name: 'Zora' },
      { id: '2', name: 'Cristina' },
      { id: '3', name: 'Caio' },
      { id: '4', name: 'Luiza' },
    ])
  }
}
