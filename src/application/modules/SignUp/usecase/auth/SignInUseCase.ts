import { IEncryptAdapter } from '@shared/protocols/cryptography/IEncryptAdapter'
import { ISignUpRepository } from '../../repository/ISignUpRepository'
import { IAuthTokenAdapter } from '@shared/protocols/cryptography/IAuthTokenAdapter'

interface ISignInRequest {
  name: string
  password: string
}

export interface ISignInResponse {
  token: string
}

interface IPayload {
  name: string
  userId: string
}

export class SignInUseCase {
  constructor(
    private repository: ISignUpRepository,
    private encryptAdapter: IEncryptAdapter,
    private authToken: IAuthTokenAdapter,
  ) {}

  async execute(request: ISignInRequest): Promise<ISignInResponse> {
    const { name, password } = request
    const user = await this.repository.findUserByName(name)
    const myPassword = user?.password.toString() as string

    console.log('user', user, myPassword)

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

    const payload: IPayload = {
      userId: user.id,
      name: user.name,
    }

    const token = this.authToken.generateToken(payload, user.id as string, '1d')

    return { token }
  }
}
