import { Either, right } from '@shared/errors/either'
import { IPersonalDataProps, PersonalData } from '../../Entities/PersonalData'
import { IPersonalDataRepository } from '../../repository/IPersonalDataRepository'
import { AppError } from '@shared/errors/AppError'

type IPersonalDataRequest = IPersonalDataProps

interface IPersonalResponse {
  message: string
}

type Response = Either<AppError, IPersonalResponse>

const message = 'Dados Pessoais cadastrados com sucesso!'

export class CreatePersonalDataUseCase {
  constructor(private userRepository: IPersonalDataRepository) {}

  async execute(request: IPersonalDataRequest): Promise<Response> {
    const {
      name,
      birthday,
      gender,
      occupation,
      maritalStatus,
      religion,
      zipCode,
      street,
      number,
      addressDetails,
      neighborhood,
      city,
      state
    } = request
    const personalData = new PersonalData({
      name,
      birthday,
      gender,
      occupation,
      maritalStatus,
      religion,
      zipCode,
      street,
      number,
      addressDetails,
      neighborhood,
      city,
      state
    })

    await this.userRepository.create(personalData)

    return right({ message })
  }
}
