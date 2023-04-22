import { success } from '../../../shared/helper/httpHelper'
import { IController } from '../../../shared/protocols/controller'
import { HttpRequest, HttpResponse } from '../../../shared/protocols/http'
import { ListUserUseCase } from './ListUserUseCase'

export class ListUserController implements IController {
  // eslint-disable-next-line no-useless-constructor
  constructor(private readonly listUseCase: ListUserUseCase) {}

  async handle(request: HttpRequest): Promise<HttpResponse> {
    const useCase = await this.listUseCase.execute()
    return success(useCase)
  }
}
