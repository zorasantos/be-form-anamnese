import { CreateSignUpUseCase } from './CreateSignUpUseCase'
import { InMemorySignUpRepository } from '@infra/database/prisma/repositories/SignUp/InMemorySignUpRepository'

describe('Sign Up', () => {
  test('should be able to create a new sign up', async () => {
    const repository = new InMemorySignUpRepository()
    const useCase = new CreateSignUpUseCase(repository)
    const data = {
      name: 'Test Name',
      birthday: '01/01/1987',
      password: '1234567890',
    }

    const result = await useCase.execute(data)
    expect(result).toBe(undefined)
  })
})
