import { Router } from 'express'
import { adaptRouteExpress } from '../../adapters/expressRouteAdapter'
import { CreateSignUpFactory } from '@application/modules/SignUp/usecase/CreateSignUp/CreateSignUpFactory'
import { validateSchemaExpress } from '@infra/adapters/schemas/validateSchemaExpress'
import { signUpSchema } from '@application/modules/SignUp/usecase/CreateSignUp/CreateSignUpSchema'
const signupRoutes = Router()

signupRoutes.post(
  '/signup',
  validateSchemaExpress(signUpSchema),
  adaptRouteExpress(CreateSignUpFactory()),
)

export { signupRoutes }
