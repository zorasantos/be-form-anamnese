import { PersonalData } from '../entities/PersonalData'

export interface IPersonalDataRepository {
  create(data: PersonalData): Promise<void>
}
