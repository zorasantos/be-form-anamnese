import { PersonalData } from '../Entities/PersonalData'

export interface IPersonalDataRepository {
  create(data: PersonalData): Promise<void>
}
