import { PersonalData } from '@application/modules/PersonalData/Entities/PersonalData'
import { IPersonalDataRepository } from '@application/modules/PersonalData/repository/IPersonalDataRepository'
import { AppDataSource } from '../typeormClient'

export class TypeormPersonalDataRepository implements IPersonalDataRepository {
  async create(data: PersonalData): Promise<void> {
    await AppDataSource.manager.create(data)
  }
}
