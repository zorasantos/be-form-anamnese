import { Router } from 'express'
import { adaptRouteExpress } from '../../adapters/expressRouteAdapter'
import { CreatePersonalDataFactory } from '../../../application/modules/PersonalData/usecase/CreatePersonalData/CreatePersonalDataFactory'
const personalRoutes = Router()

personalRoutes.post('/personal', adaptRouteExpress(CreatePersonalDataFactory()))

export { personalRoutes }
