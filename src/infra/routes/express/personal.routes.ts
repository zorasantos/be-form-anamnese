import { Router } from 'express'
import { adaptRouteExpress } from '../../adapters/expressRouteAdapter'
import { CreatePersonalDataFactory } from '@application/modules/PersonalData/usecase/CreatePersonalData/CreatePersonalDataFactory'
import { validateSchemaExpress } from '@infra/adapters/schemas/validateSchemaExpress'
import { personalDataSchema } from '@application/modules/PersonalData/usecase/CreatePersonalData/CreatePersonalDataSchema'
import { ensureAuthenticated } from '@infra/middlewares/ensureAuthenticated'
const personalRoutes = Router()

personalRoutes.post(
  '/personal',
  ensureAuthenticated,
  validateSchemaExpress(personalDataSchema),
  adaptRouteExpress(CreatePersonalDataFactory())
)

export { personalRoutes }
