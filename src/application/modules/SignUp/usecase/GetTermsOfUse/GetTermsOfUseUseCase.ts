import { ISignUpRepository } from '../../repository/ISignUpRepository'

export interface IGetTermsOfUseResponse {
  isTermsOfUse: boolean
}

export class GetTermsOfUseUseCase {
  constructor(private repository: ISignUpRepository) {}

  async execute(name: string): Promise<IGetTermsOfUseResponse> {
    const user = await this.repository.findUserByName(name)

    if (!user) {
      throw new Error('User not found!')
    }

    return { isTermsOfUse: user.term }
  }
}
