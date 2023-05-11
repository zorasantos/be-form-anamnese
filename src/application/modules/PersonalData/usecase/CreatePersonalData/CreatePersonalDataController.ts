import { success } from '@shared/helper/httpHelper'
import { IController } from '@shared/protocols/controller'
import { HttpRequest, HttpResponse } from '@shared/protocols/http'
import { personalDataSchema } from './CreatePersonalDataSchema'
import { CreatePersonalDataUseCase } from './CreatePersonalDataUseCase'

export class CreatePersonalDataController implements IController {
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
    } = personalDataSchema.parse(request.body)

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
