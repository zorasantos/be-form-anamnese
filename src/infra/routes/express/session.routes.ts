import { Router } from 'express'
import { adaptRouteExpress } from '../../adapters/expressRouteAdapter'
import { SignInFactory } from '@application/modules/SignUp/usecase/auth/SignInFactory'
// import { validateSchemaExpress } from '@infra/adapters/schemas/validateSchemaExpress'
// import { difficultiesAndObjectivesSchema } from '@application/modules/DifficultiesAndObjectives/usecase/CreateDifficultiesAndObjectives/CreateDifficultiesAndObjectivesSchema'
const sessionRoutes = Router()

sessionRoutes.post(
  '/session',
  // validateSchemaExpress(difficultiesAndObjectivesSchema),
  adaptRouteExpress(SignInFactory()),
)

export { sessionRoutes }
