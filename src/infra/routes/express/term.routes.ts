import { Router } from 'express'
import { adaptRouteExpress } from '../../adapters/expressRouteAdapter'
import { GetTermsOfUseFactory } from '@application/modules/SignUp/usecase/GetTermsOfUse/GetTermsOfUseFactory'

const termRoutes = Router()

termRoutes.post('/term', adaptRouteExpress(GetTermsOfUseFactory()))

export { termRoutes }
