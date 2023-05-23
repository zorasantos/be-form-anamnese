import { PersonalData } from '@application/modules/PersonalData/entities/PersonalData'
import { IPersonalDataRepository } from '@application/modules/PersonalData/repository/IPersonalDataRepository'
import { PrismaPersonalDataMapper } from '../../mappers/prismaPersonalDataMapper'
import { prismaClient } from '../../prismaClient'

export class PrismaPersonalDataRepository implements IPersonalDataRepository {
  async create(data: PersonalData): Promise<void> {
    const raw = PrismaPersonalDataMapper.toPrisma(data)
    await prismaClient.personalData.create({
      data: raw,
    })
  }
}
