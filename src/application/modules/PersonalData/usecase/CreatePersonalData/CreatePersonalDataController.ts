import { create } from '@shared/helper/httpHelper'
import { IController } from '@shared/protocols/controller'
import { HttpRequest, HttpResponse } from '@shared/protocols/http'
import { CreatePersonalDataUseCase } from './CreatePersonalDataUseCase'
import { IPersonalDataProps } from '../../entities/PersonalData'

interface IPersonalDataRequest extends IPersonalDataProps {}

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
    } = request.body as IPersonalDataRequest

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
    return create(useCase)
  }
}
