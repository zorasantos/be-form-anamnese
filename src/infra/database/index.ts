import { PrismaPersonalDataRepository } from './prisma/repositories/PersonalData/PrismaPersonalDataRepository'
import { PrismaDifficultiesAndObjectivesRepository } from './prisma/repositories/DifficultiesAndObjectives/PrismaDifficultiesAndObjectivesRepository'

const personalDataRepository = new PrismaPersonalDataRepository()
const difficultiesAndObjectivesRepository =
  new PrismaDifficultiesAndObjectivesRepository()

export { personalDataRepository, difficultiesAndObjectivesRepository }
