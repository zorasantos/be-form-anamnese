import { IPersonalDataDTO } from '../infra/repository/IPersonalDataDTO'
import { IPersonalDataRepository } from '../infra/repository/IPersonalDataRepository'

export class CreatePersonalDataUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor(private userRepository: IPersonalDataRepository) {}

  async execute(data: IPersonalDataDTO): Promise<void> {
    const result = await this.userRepository.create(data)
    return result
  }
}
