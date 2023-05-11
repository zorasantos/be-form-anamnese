import { Router } from 'express'
import { adaptRouteExpress } from '../../adapters/expressRouteAdapter'
import { CreatePersonalDataFactory } from '@application/modules/PersonalData/usecase/CreatePersonalData/CreatePersonalDataFactory'
import { validateSchema } from '@shared/helper/validateSchema'
import { personalDataSchema } from '@application/modules/PersonalData/usecase/CreatePersonalData/CreatePersonalDataSchema'
const personalRoutes = Router()

personalRoutes.post(
  '/personal',
  validateSchema(personalDataSchema),
  adaptRouteExpress(CreatePersonalDataFactory()),
)

export { personalRoutes }
