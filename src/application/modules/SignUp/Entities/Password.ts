import { EncryptAdapter } from '@infra/adapters/cryptography/encryptAdapter'

export class Password {
  private password: string

  private encryptPassword(password: string) {
    const encryptAdapter = new EncryptAdapter()
    const passwordWhitHash = encryptAdapter.hash(password)
    return passwordWhitHash
  }

  initialize(password: string) {
    const passwordEncrypted = this.encryptPassword(password)

    this.password = passwordEncrypted
  }

  constructor(password: string) {
    this.initialize(password)
  }

  public get value(): string {
    return this.password
  }
}
