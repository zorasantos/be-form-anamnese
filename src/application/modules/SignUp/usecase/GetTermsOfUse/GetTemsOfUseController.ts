import { ok } from '@shared/helper/httpHelper'
import { IController } from '@shared/protocols/controller'
import { HttpRequest, HttpResponse } from '@shared/protocols/http'
import { GetTermsOfUseUseCase } from './GetTermsOfUseUseCase'

interface IRequest {
  name: string
}

export class GetTermsOfUseController implements IController {
  constructor(private readonly useCase: GetTermsOfUseUseCase) {}

  async handle(request: HttpRequest): Promise<HttpResponse> {
    const { name } = request.body as IRequest

    const useCase = await this.useCase.execute(name)
    return ok(useCase)
  }
}
