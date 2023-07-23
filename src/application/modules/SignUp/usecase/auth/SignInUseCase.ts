import { IEncryptAdapter } from '@shared/protocols/cryptography/IEncryptAdapter'
import { ISignUpRepository } from '../../repository/ISignUpRepository'
import { IAuthTokenAdapter } from '@shared/protocols/cryptography/IAuthTokenAdapter'
import { Either, left, right } from '@shared/errors/either'
import { AppError } from '@shared/errors/AppError'
interface ISignInRequest {
  name: string
  password: string
  term: boolean
}

export interface ISignInResponse {
  token: string
}

type Response = Either<AppError, ISignInResponse>

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
    private authToken: IAuthTokenAdapter
  ) {}

  async execute(request: ISignInRequest): Promise<Response> {
    console.log('Refletiu')
    const { name, password, term } = request
    const user = await this.repository.findUserByName(name)
    const myPassword = user?.password.toString() as string

    if (!user) {
      return left(new AppError('Email or password incorrect!', 400))
    }

    const passwordMatch = await this.encryptAdapter.compare(
      password,
      myPassword
    )

    if (!passwordMatch) {
      return left(new AppError('Email or password incorrect!', 400))
    }

    if (!user.term) {
      if (term) {
        await this.repository.updateTerm(term, user.id)
      } else {
        return left(new AppError('Accept terms is required!', 400))
      }
    }

    const getTerm = await this.repository.findUserByName(name)

    const payload: IPayload = {
      userId: user.id,
      name: user.name,
      profile: user.profile,
      term: getTerm?.term as boolean
    }

    const token = this.authToken.generateToken(payload, user.id as string, '1d')

    return right({ token })
  }
}
