import { create } from '@shared/helper/httpHelper'
import { IController } from '@shared/protocols/controller'
import { HttpRequest, HttpResponse } from '@shared/protocols/http'
import { CreateFamilyAndYouUseCase } from './CreateFamilyAndYouUseCase'
import { IFamilyAndYouProps } from '../../Entities/FamilyAndYou'

interface IFamilyAndYouPropsRequest extends IFamilyAndYouProps {}

export class CreateFamilyAndYouController implements IController {
  constructor(private readonly createUseCase: CreateFamilyAndYouUseCase) {}

  async handle(request: HttpRequest): Promise<HttpResponse> {
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
      botherYou,
    } = request.body as IFamilyAndYouPropsRequest

    const data = {
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
      botherYou,
    }
    const useCase = await this.createUseCase.execute(data)
    return create(useCase)
  }
}
