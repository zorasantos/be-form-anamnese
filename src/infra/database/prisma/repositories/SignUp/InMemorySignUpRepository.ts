import { SignUp } from '@application/modules/SignUp/Entities/SignUp'
import { ISignUpRepository } from '@application/modules/SignUp/repository/ISignUpRepository'

export class InMemorySignUpRepository implements ISignUpRepository {
  public signUp: SignUp[] = []

  async create(data: SignUp): Promise<void> {
    this.signUp.push(data)
  }

  async findUserByName(name: string): Promise<SignUp | null> {
    const user = this.signUp?.find((item) => item.name === name)

    if (!user) {
      return null
    }

    return user
  }
}
