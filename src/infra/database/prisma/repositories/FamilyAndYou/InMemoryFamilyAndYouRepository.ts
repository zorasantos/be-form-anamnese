import { FamilyAndYou } from '@application/modules/FamilyAndYou/Entities/FamilyAndYou'
import { IFamilyAndYouRepository } from '@application/modules/FamilyAndYou/repository/IFamilyAndYouRepository'

export class InMemoryFamilyAndYouRepository implements IFamilyAndYouRepository {
  public familyAndYou: FamilyAndYou[] = []

  async create(data: FamilyAndYou): Promise<void> {
    this.familyAndYou.push(data)
  }
}
