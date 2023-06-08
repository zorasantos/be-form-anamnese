import { FamilyAndYou } from '../Entities/FamilyAndYou'

export interface IFamilyAndYouRepository {
  create(data: FamilyAndYou): Promise<void>
}
