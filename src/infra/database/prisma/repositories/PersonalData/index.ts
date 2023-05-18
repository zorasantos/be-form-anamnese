import { IPersonalDataRepository } from '@application/modules/PersonalData/repository/IPersonalDataRepository'
import { PrismaPersonalDataRepository } from './PrismaPersonalDataRepository'

class TypeORMRepository implements IPersonalDataRepository {
  async create() {
    console.log('Criou o usuário')
  }
}

const prismaRepository = new PrismaPersonalDataRepository()

const typeORMRepository = new TypeORMRepository()

const repository =
  process.env.REPOSITORY_TYPE === 'prisma'
    ? prismaRepository
    : typeORMRepository

export { repository }
