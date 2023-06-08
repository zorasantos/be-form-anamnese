import { randomUUID } from 'crypto'
import { Password } from './Password'

describe('Password Value Object', () => {
  it('Should be able initialize with encrypted password', () => {
    const originalPassword = randomUUID()
    const password = new Password(originalPassword)
    password.initialize(originalPassword)

    expect(password.value).not.toBe(originalPassword)
    expect(typeof password.value).toBe('string')
    expect(password.value.length).toBeGreaterThan(0)
  })
})
