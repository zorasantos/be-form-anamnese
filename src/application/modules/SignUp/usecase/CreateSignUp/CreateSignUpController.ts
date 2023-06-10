import { create } from '@shared/helper/httpHelper'
import { IController } from '@shared/protocols/controller'
import { HttpRequest, HttpResponse } from '@shared/protocols/http'
import { CreateSignUpUseCase } from './CreateSignUpUseCase'

interface ISignUpDTO {
  name: string
  birthday: string
  password: string
  profile: string
}

export class CreateSignUpController implements IController {
  constructor(private readonly useCase: CreateSignUpUseCase) {}

  async handle(request: HttpRequest): Promise<HttpResponse> {
    const {
      name,
      birthday,
      password,
      profile: typeProfile,
    } = request.body as ISignUpDTO

    // Refatorar para user value object
    const profile = !typeProfile ? 'USER' : typeProfile

    const data = {
      name,
      birthday,
      password,
      profile,
    }
    const useCase = await this.useCase.execute(data)
    return create(useCase)
  }
}
