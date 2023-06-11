import { SignUp } from '../Entities/SignUp'

export interface ISignUpRepository {
  create(data: SignUp): Promise<void>
  findUserByName(name: string): Promise<SignUp | null>
  findUserById(id: string): Promise<SignUp | null>
  updateTerm(term: boolean, userId: string): Promise<void>
}
