import { ok } from '@shared/helper/httpHelper'
import { IController } from '@shared/protocols/controller'
import { HttpRequest, HttpResponse } from '@shared/protocols/http'
import { SignInUseCase } from './SignInUseCase'

interface ISignInDTO {
  name: string
  password: string
  term: boolean
}

export class SignInController implements IController {
  constructor(private readonly useCase: SignInUseCase) {}

  async handle(request: HttpRequest): Promise<HttpResponse> {
    const { name, password, term } = request.body as ISignInDTO

    const data = {
      name,
      password,
      term,
    }
    const useCase = await this.useCase.execute(data)
    return ok(useCase)
  }
}
