import { BcrypterAdapter } from '@infra/adapters/criptography/bcriptyAdapter'

export class Password {
  private password: string

  private encryptPassword(password: string) {
    const bcryptAdapter = new BcrypterAdapter()
    const passwordWhitHash = bcryptAdapter.hash(password)
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
