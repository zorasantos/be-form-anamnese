import { SignUp } from '@application/modules/SignUp/Entities/SignUp'

export class PrismaSignUpMapper {
  static toPrisma(data: SignUp) {
    return {
      id: data.id,
      name: data.name,
      birthday: data.birthday,
      password: data.password.value,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
    }
  }
}
