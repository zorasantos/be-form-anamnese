import { IFamilyAndYouProps } from '@application/modules/FamilyAndYou/Entities/FamilyAndYou'

export const familyAndYouData: IFamilyAndYouProps = {
  personalDataId: 'aaaf862a-a01e-4a3a-95d8-ee3b3b85e5e1',
  placeOfBirth: 'Zora',
  fatherAge: 0,
  fatherDeathAge: 0,
  ageWhenFatherDied: 0,
  fatherOccupation: '',
  fatherDescription: '',
  motherAge: 0,
  motherDeathAge: 0,
  ageWhenMotherDied: 0,
  motherOccupation: '',
  motherDescription: '',
  problemsWithParents: '',
  relationshipBrothers: '',
  atmosphereHome: '',
  importantChanges: '',
  anyoneImportantForMe: '',
  psychiatricTreatment: 0,
  historyOfMentalIllness: 0,
  member: [
    { name: 'Zora', problem: 'Teste' },
    { name: 'Zora', problem: 'Teste' }
  ],
  children: [
    {
      name: 'zora',
      occupation: '',
      age: 37,
      gender: 'M',
      comments: ''
    }
  ],
  anyMemberFamilySuicideAttempt: 0,
  anyMemberFamilyDiedBySuicide: 0,
  manyChildrenThereInFamily: 0,
  botherYou: ''
}
