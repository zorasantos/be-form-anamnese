import { IHashCompare } from '@shared/protocols/criptography/hashCompare'
import { IHasher } from '@shared/protocols/criptography/hasher'
import bcrypt from 'bcrypt'

class BcrypterAdapter implements IHasher, IHashCompare {
  async hash(value: string): Promise<string> {
    const hash = await bcrypt.hash(value, 8)
    return hash
  }

  compare(value: string, hash: string): Promise<boolean> {
    const result = bcrypt.compare(value, hash)
    return result
  }
}

export { BcrypterAdapter }
