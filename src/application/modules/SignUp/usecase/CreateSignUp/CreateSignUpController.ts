import { create } from '@shared/helper/httpHelper'
import { IController } from '@shared/protocols/controller'
import { HttpRequest, HttpResponse } from '@shared/protocols/http'
import { CreateSignUpUseCase } from './CreateSignUpUseCase'

interface ISignUpDTO {
  name: string
  birthday: string
  password: string
}

export class CreateSignUpController implements IController {
  constructor(private readonly useCase: CreateSignUpUseCase) {}

  async handle(request: HttpRequest): Promise<HttpResponse> {
    const { name, birthday, password } = request.body as ISignUpDTO

    const data = {
      name,
      birthday,
      password,
    }
    const useCase = await this.useCase.execute(data)
    return create(useCase)
  }
}
