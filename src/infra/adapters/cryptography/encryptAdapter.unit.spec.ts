import { EncryptAdapter } from './encryptAdapter'
import bcrypt from 'bcrypt'

jest.mock('bcrypt', () => ({
  hashSync: jest.fn().mockReturnValue('1$7@90yot'),
  compare: jest.fn().mockReturnValue(true)
}))

describe('EncryptAdapter', () => {
  const encryptAdapter = new EncryptAdapter()

  it('should be able to hash the value correctly', () => {
    const valueToHash = 'password123'
    const hashedValue = encryptAdapter.hash(valueToHash)

    expect(bcrypt.hashSync).toHaveBeenCalledWith(valueToHash, 8)
    expect(hashedValue).toBe('1$7@90yot')
  })

  it('should be able to compare the value and hash correctly', async () => {
    const valueToCompare = 'password123'
    const hash = 'p0&4w187'
    const result = await encryptAdapter.compare(valueToCompare, hash)

    expect(bcrypt.compare).toHaveBeenCalledWith(valueToCompare, hash)
    expect(result).toBe(true)
  })
})
