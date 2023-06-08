import { SignUp } from '../Entities/SignUp'

export interface ISignUpRepository {
  create(data: SignUp): Promise<void>
}
