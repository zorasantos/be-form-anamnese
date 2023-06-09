import { IEncryptAdapter } from '@shared/protocols/cryptography/IEncryptAdapter'
import bcrypt from 'bcrypt'

export class EncryptAdapter implements IEncryptAdapter {
  hash(value: string): string {
    const hash = bcrypt.hashSync(value, 8)
    return hash
  }

  compare(value: string, hash: string): Promise<boolean> {
    const result = bcrypt.compare(value, hash)
    return result
  }
}
