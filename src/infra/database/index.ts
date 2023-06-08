import { PrismaPersonalDataRepository } from './prisma/repositories/PersonalData/PrismaPersonalDataRepository'
import { PrismaFamilyAndYouRepository } from './prisma/repositories/FamilyAndYou/PrismaFamilyAndYouRepository'
import { PrismaDifficultiesAndObjectivesRepository } from './prisma/repositories/DifficultiesAndObjectives/PrismaDifficultiesAndObjectivesRepository'

const personalDataRepository = new PrismaPersonalDataRepository()
const familyRepository = new PrismaFamilyAndYouRepository()
const difficultiesAndObjectivesRepository =
  new PrismaDifficultiesAndObjectivesRepository()

export {
  personalDataRepository,
  difficultiesAndObjectivesRepository,
  familyRepository,
}
