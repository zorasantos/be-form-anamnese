import { PersonalData } from '../../Entities/PersonalData'
import { IPersonalDataRepository } from '../../repository/IPersonalDataRepository'

interface PersonalDataRequest {
  name: string
  birthday: string
  gender: string
  occupation: string
  maritalStatus: string
  religion: string
  zipCode: string
  street: string
  number: string
  addressDetails: string
  neighborhood: string
  city: string
  state: string
}

export class CreatePersonalDataUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor(private userRepository: IPersonalDataRepository) {}

  async execute(request: PersonalDataRequest): Promise<void> {
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
      state,
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
      state,
    })

    const result = await this.userRepository.create(personalData)

    return result
  }
}
