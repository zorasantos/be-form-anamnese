import { IPersonalDataDTO } from './IPersonalDataDTO'

export interface IPersonalDataRepository {
  create(data: IPersonalDataDTO): Promise<void>
}
