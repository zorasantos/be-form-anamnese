// import { PersonalData as RawPersonalData } from '@prisma/client';
import { PersonalData } from '../../../../application/modules/PersonalData/Entities/PersonalData'

export class PrismaPersonalDataMapper {
  static toPrisma(data: PersonalData) {
    return {
      id: data.id,
      name: data.name,
      birthday: data.birthday,
      gender: data.gender,
      occupation: data.occupation,
      maritalStatus: data.maritalStatus,
      religion: data.religion,
      zipCode: data.zipCode,
      street: data.street,
      number: data.number,
      addressDetails: data.addressDetails,
      neighborhood: data.neighborhood,
      city: data.city,
      state: data.state,
    }
  }
}
