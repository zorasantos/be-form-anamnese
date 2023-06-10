import { IEncryptAdapter } from '@shared/protocols/cryptography/IEncryptAdapter'
import { ISignUpRepository } from '../../repository/ISignUpRepository'
import { IAuthTokenAdapter } from '@shared/protocols/cryptography/IAuthTokenAdapter'

interface ISignInRequest {
  name: string
  password: string
  term: boolean
}

export interface ISignInResponse {
  token: string
}

interface IPayload {
  name: string
  userId: string
  profile: string
  term: boolean
}

export class SignInUseCase {
  constructor(
    private repository: ISignUpRepository,
    private encryptAdapter: IEncryptAdapter,
    private authToken: IAuthTokenAdapter,
  ) {}

  async execute(request: ISignInRequest): Promise<ISignInResponse> {
    const { name, password, term } = request
    const user = await this.repository.findUserByName(name)
    const myPassword = user?.password.toString() as string

    if (!user) {
      throw new Error('Email or password incorrect!')
    }

    const passwordMatch = await this.encryptAdapter.compare(
      password,
      myPassword,
    )

    if (!passwordMatch) {
      throw new Error('Email or password incorrect!')
    }

    if (!user.term) {
      if (term) {
        await this.repository.updateTerm(term, user.id)
      } else {
        throw new Error('Accept terms is required!')
      }
    }

    const getTerm = await this.repository.findUserByName(name)

    const payload: IPayload = {
      userId: user.id,
      name: user.name,
      profile: user.profile,
      term: getTerm?.term as boolean,
    }

    const token = this.authToken.generateToken(payload, user.id as string, '1d')

    return { token }
  }
}
