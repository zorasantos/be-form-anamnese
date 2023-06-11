import { Router } from 'express'
import { adaptRouteExpress } from '../../adapters/expressRouteAdapter'
import { SignInFactory } from '@application/modules/SignUp/usecase/auth/SignInFactory'
import { validateSchemaExpress } from '@infra/adapters/schemas/validateSchemaExpress'
import { signInSchema } from '@application/modules/SignUp/usecase/auth/SignInSchema'
const sessionRoutes = Router()

sessionRoutes.post(
  '/session',
  validateSchemaExpress(signInSchema),
  adaptRouteExpress(SignInFactory()),
)

export { sessionRoutes }
