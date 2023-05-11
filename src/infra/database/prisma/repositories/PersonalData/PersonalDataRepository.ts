import { PersonalData } from '@application/modules/PersonalData/Entities/PersonalData'
import { IPersonalDataRepository } from '@application/modules/PersonalData/repository/IPersonalDataRepository'
import { PrismaPersonalDataMapper } from '../../mappers/prismaPersonalDataMapper'
import { prismaClient } from '../../prismaClient'

export class PersonalDataRepository implements IPersonalDataRepository {
  async create(data: PersonalData): Promise<void> {
    const raw = PrismaPersonalDataMapper.toPrisma(data)
    await prismaClient.personalData.create({
      data: raw,
    })
  }
}
