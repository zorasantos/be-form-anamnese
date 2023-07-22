import { IAuthTokenAdapter } from '@shared/protocols/cryptography/IAuthTokenAdapter'
import jwt from 'jsonwebtoken'

const SECRET_TOKEN = process.env.SECRET_JWT as string

export class AuthTokenAdapter implements IAuthTokenAdapter {
  generateToken(payload: object, sub: string, exp: string): string {
    const token = jwt.sign({ ...payload }, SECRET_TOKEN, {
      subject: sub,
      expiresIn: exp
    })
    return token
  }

  verifyToken(token: string): boolean {
    const isVerified = jwt.verify(token, SECRET_TOKEN)

    return !!isVerified
  }
}
