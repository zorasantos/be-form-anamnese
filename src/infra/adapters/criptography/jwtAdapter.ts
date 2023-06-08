import { IEncrypter } from '@shared/protocols/criptography/encrypter'
import jwt from 'jsonwebtoken'

const SECRET_TOKEN = process.env.SECRET_JWT

export class JwtAdapter implements IEncrypter {
  encrypt(payload: object, sub: string, exp: string): string {
    const token = jwt.sign({ ...payload }, SECRET_TOKEN as string, {
      subject: sub,
      expiresIn: exp,
    })
    return token
  }
}
