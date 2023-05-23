import { PersonalData } from '@application/modules/PersonalData/entities/PersonalData'
import { IPersonalDataRepository } from '@application/modules/PersonalData/repository/IPersonalDataRepository'
import { AppDataSource } from '../typeormClient'
import { Repository } from 'typeorm'
import { PersonalDataEntitySchema } from '../entitiesSchemas/PersonalData'

export class TypeormPersonalDataRepository implements IPersonalDataRepository {
  private repository: Repository<PersonalData>

  constructor() {
    const userRepository = AppDataSource.getRepository(PersonalDataEntitySchema)
    this.repository = userRepository
  }

  async create(data: PersonalData): Promise<void> {
    const personalData = this.repository.create(data)
    await this.repository.save(personalData)
  }
}
