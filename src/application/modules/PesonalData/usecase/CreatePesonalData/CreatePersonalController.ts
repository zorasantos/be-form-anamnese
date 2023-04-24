import { success } from '../../../../../shared/helper/httpHelper'
import { IController } from '../../../../../shared/protocols/controller'
import { HttpRequest, HttpResponse } from '../../../../../shared/protocols/http'
import { IPersonalDataDTO } from '../../repository/IPersonalDataDTO'
import { CreatePersonalDataUseCase } from './CreatePersonalDataUseCase'

export class CreatePersonalController implements IController {
  // eslint-disable-next-line no-useless-constructor
  constructor(private readonly listUseCase: CreatePersonalDataUseCase) {}

  async handle(request: HttpRequest): Promise<HttpResponse> {
    const {
      addressDetails,
      birthday,
      city,
      gender,
      maritalStatus,
      name,
      neighborhood,
      number,
      occupation,
      religion,
      state,
      street,
      zipCode,
    } = request.body as IPersonalDataDTO

    const data = {
      addressDetails,
      birthday,
      city,
      gender,
      maritalStatus,
      name,
      neighborhood,
      number,
      occupation,
      religion,
      state,
      street,
      zipCode,
    }
    const useCase = await this.listUseCase.execute(data)
    return success(useCase)
  }
}
