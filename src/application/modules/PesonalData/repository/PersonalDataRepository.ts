import { prismaClient } from '../../../../../prisma/prismaClient'
import { IPersonalDataDTO } from './IPersonalDataDTO'
import { IPersonalDataRepository } from './IPersonalDataRepository'

export class PersonalDataRepository implements IPersonalDataRepository {
  async create(data: IPersonalDataDTO): Promise<void> {
    await prismaClient.personalData.create({
      data,
    })
  }
}
