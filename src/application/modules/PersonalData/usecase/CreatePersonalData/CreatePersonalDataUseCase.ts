import { IPersonalDataProps, PersonalData } from '../../Entities/PersonalData'
import { IPersonalDataRepository } from '../../repository/IPersonalDataRepository'

interface IPersonalDataRequest extends IPersonalDataProps {}

export class CreatePersonalDataUseCase {
  constructor(private userRepository: IPersonalDataRepository) {}

  async execute(request: IPersonalDataRequest): Promise<void> {
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

    await this.userRepository.create(personalData)
  }
}
