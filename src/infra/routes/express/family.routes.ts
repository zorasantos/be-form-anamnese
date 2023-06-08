import { Router } from 'express'
import { adaptRouteExpress } from '../../adapters/expressRouteAdapter'
import { CreateFamilyAndYouFactory } from '@application/modules/FamilyAndYou/usecase/CreateFamilyAndYou/CreateFamilyAndYouFactory'
// import { validateSchemaExpress } from '@infra/adapters/schemas/validateSchemaExpress'
// import { familyAndYouSchema } from '@application/modules/FamilyAndYou/usecase/CreateFamilyAndYou/CreateFamilyAndYouSchema'
const familyRoutes = Router()

familyRoutes.post(
  '/family',
  // validateSchemaExpress(familyAndYouSchema),
  adaptRouteExpress(CreateFamilyAndYouFactory()),
)

export { familyRoutes }
