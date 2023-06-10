import { Password } from '../../Entities/Password'
import { SignUp } from '../../Entities/SignUp'
import { ISignUpRepository } from '../../repository/ISignUpRepository'

interface ISignUpRequest {
  name: string
  birthday: string
  password: string
  profile: string
}

export class CreateSignUpUseCase {
  constructor(private repository: ISignUpRepository) {}

  async execute(request: ISignUpRequest): Promise<void> {
    const { name, birthday, password, profile } = request

    const personalData = new SignUp({
      name,
      birthday,
      password: new Password(password),
      profile,
    })

    await this.repository.create(personalData)
  }
}
