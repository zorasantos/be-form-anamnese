import { ok } from '@shared/helper/httpHelper'
import { IController } from '@shared/protocols/controller'
import { HttpRequest, HttpResponse } from '@shared/protocols/http'
import { VerifyTokenUseCase } from './VerifyTokenUseCase'

interface IRequest {
  token: string
}

export class VerifyTokenController implements IController {
  constructor(private readonly useCase: VerifyTokenUseCase) {}

  async handle(request: HttpRequest): Promise<HttpResponse> {
    const { token } = request.body as IRequest

    const result = this.useCase.execute(token)

    return ok(result)
  }
}
