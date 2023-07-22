import { IFamilyAndYouProps, FamilyAndYou } from '../../Entities/FamilyAndYou'
import { IFamilyAndYouRepository } from '../../repository/IFamilyAndYouRepository'

interface IFamilyAndYouRequest extends IFamilyAndYouProps {}

export class CreateFamilyAndYouUseCase {
  constructor(private repository: IFamilyAndYouRepository) {}

  async execute(request: IFamilyAndYouRequest): Promise<void> {
    const {
      personalDataId,
      placeOfBirth,
      fatherAge,
      fatherDeathAge,
      ageWhenFatherDied,
      fatherOccupation,
      fatherDescription,
      motherAge,
      motherDeathAge,
      ageWhenMotherDied,
      motherOccupation,
      motherDescription,
      problemsWithParents,
      relationshipBrothers,
      atmosphereHome,
      importantChanges,
      anyoneImportantForMe,
      psychiatricTreatment,
      historyOfMentalIllness,
      member,
      children,
      anyMemberFamilySuicideAttempt,
      anyMemberFamilyDiedBySuicide,
      manyChildrenThereInFamily,
      botherYou
    } = request
    const data = new FamilyAndYou({
      personalDataId,
      placeOfBirth,
      fatherAge,
      fatherDeathAge,
      ageWhenFatherDied,
      fatherOccupation,
      fatherDescription,
      motherAge,
      motherDeathAge,
      ageWhenMotherDied,
      motherOccupation,
      motherDescription,
      problemsWithParents,
      relationshipBrothers,
      atmosphereHome,
      importantChanges,
      anyoneImportantForMe,
      psychiatricTreatment,
      historyOfMentalIllness,
      member,
      children,
      anyMemberFamilySuicideAttempt,
      anyMemberFamilyDiedBySuicide,
      manyChildrenThereInFamily,
      botherYou
    })

    const result = await this.repository.create(data)

    return result
  }
}
