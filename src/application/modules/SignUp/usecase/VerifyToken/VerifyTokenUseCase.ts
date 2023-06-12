import { IAuthTokenAdapter } from '@shared/protocols/cryptography/IAuthTokenAdapter'

export interface IVerifyTokenResponse {
  isVerified: boolean
}

export class VerifyTokenUseCase {
  constructor(private adapter: IAuthTokenAdapter) {}

  execute(token: string): IVerifyTokenResponse {
    const result = this.adapter.verifyToken(token)

    return { isVerified: result }
  }
}
