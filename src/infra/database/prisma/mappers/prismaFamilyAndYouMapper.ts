// import { PersonalData as RawPersonalData } from '@prisma/client';
import { FamilyAndYou } from '@application/modules/FamilyAndYou/Entities/FamilyAndYou'

export class PrismaFamilyAndYouMapper {
  static toPrisma(data: FamilyAndYou) {
    return {
      id: data.id,
      personalDataId: data.personalDataId,
      placeOfBirth: data.placeOfBirth,
      fatherAge: data.fatherAge,
      fatherDeathAge: data.fatherDeathAge,
      ageWhenFatherDied: data.ageWhenFatherDied,
      fatherOccupation: data.fatherOccupation,
      fatherDescription: data.fatherDescription,
      motherAge: data.motherAge,
      motherDeathAge: data.ageWhenFatherDied,
      ageWhenMotherDied: data.ageWhenFatherDied,
      motherOccupation: data.motherOccupation,
      motherDescription: data.motherDescription,
      problemsWithParents: data.problemsWithParents,
      relationshipBrothers: data.relationshipBrothers,
      atmosphereHome: data.atmosphereHome,
      importantChanges: data.importantChanges,
      anyoneImportantForMe: data.anyoneImportantForMe,
      psychiatricTreatment: data.psychiatricTreatment,
      historyOfMentalIllness: data.historyOfMentalIllness,
      member: data.member,
      children: data.children,
      anyMemberFamilySuicideAttempt: data.anyMemberFamilySuicideAttempt,
      anyMemberFamilyDiedBySuicide: data.anyMemberFamilyDiedBySuicide,
      manyChildrenThereInFamily: data.manyChildrenThereInFamily,
      botherYou: data.botherYou,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
    }
  }
}
