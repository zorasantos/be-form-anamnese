import { IListUserDTO } from '../IListUserDTO'

export interface IUserRepository {
  list(): Promise<IListUserDTO[] | null>
}
