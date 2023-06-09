import { PrismaSignUpMapper } from '../../mappers/prismaSignUpMapper'
import { prismaClient } from '../../prismaClient'
import { ISignUpRepository } from '@application/modules/SignUp/repository/ISignUpRepository'
import { SignUp } from '@application/modules/SignUp/Entities/SignUp'

export class PrismaSignUpRepository implements ISignUpRepository {
  async create(data: SignUp): Promise<void> {
    const raw = PrismaSignUpMapper.toPrisma(data)
    await prismaClient.signUp.create({
      data: raw,
    })
  }

  async findUserByName(name: string): Promise<SignUp | null> {
    const user = await prismaClient.signUp.findFirst({
      where: { name },
    })

    if (!user) {
      return null
    }

    return user as unknown as SignUp
  }
}
