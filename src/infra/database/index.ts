import { PrismaPersonalDataRepository } from './prisma/repositories/PersonalData/PrismaPersonalDataRepository'
import { TypeormPersonalDataRepository } from './typeorm/repositories/TypeormPersonalDataRepository'

const prismaRepository = new PrismaPersonalDataRepository()

const typeORMRepository = new TypeormPersonalDataRepository()

const repository =
  process.env.ORM_TYPE === 'prisma' ? prismaRepository : typeORMRepository

export { repository }
