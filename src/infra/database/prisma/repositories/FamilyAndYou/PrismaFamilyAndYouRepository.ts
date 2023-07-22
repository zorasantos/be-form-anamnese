import { FamilyAndYou } from '@application/modules/FamilyAndYou/Entities/FamilyAndYou'
import { IFamilyAndYouRepository } from '@application/modules/FamilyAndYou/repository/IFamilyAndYouRepository'
import { PrismaFamilyAndYouMapper } from '../../mappers/prismaFamilyAndYouMapper'
import { prismaClient } from '../../prismaClient'

export class PrismaFamilyAndYouRepository implements IFamilyAndYouRepository {
  async create(data: FamilyAndYou): Promise<void> {
    const raw = PrismaFamilyAndYouMapper.toPrisma(data)
    await prismaClient.familyAndYou.create({
      data: {
        ...raw,
        member: {
          create: data.member?.map((item) => ({
            name: item.name,
            problems: item.problem,
            createdAt: new Date(),
            updatedAt: new Date()
          }))
        },
        children: {
          create: data.children?.map((item) => ({
            name: item.name,
            age: item.age,
            comments: item.comments,
            gender: item.gender,
            occupation: item.occupation,
            createdAt: new Date(),
            updatedAt: new Date()
          }))
        }
      }
    })
  }
}
