import { SignUp } from '@application/modules/SignUp/Entities/SignUp'
import { ISignUpRepository } from '@application/modules/SignUp/repository/ISignUpRepository'

export class InMemorySignUpRepository implements ISignUpRepository {
  public signUp: SignUp[] = []

  async create(data: SignUp): Promise<void> {
    this.signUp.push(data)
  }
}
