import { PersonalData } from '../../../../../application/modules/PersonalData/Entities/PersonalData'
import { IPersonalDataRepository } from '../../../../../application/modules/PersonalData/repository/IPersonalDataRepository'

export class InMemoryPersonalDataRepository implements IPersonalDataRepository {
  public personalData: PersonalData[] = []

  async create(data: PersonalData): Promise<void> {
    this.personalData.push(data)
  }
}
