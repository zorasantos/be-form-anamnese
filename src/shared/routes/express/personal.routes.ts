import { Router } from 'express'
import { CreatePersonalDataFactory } from '../../../modules/PesonalData/CreatePesonalData/CreatePersonalDataFactory'
import { adaptRouteExpress } from '../../../main/adapters/expressRouteAdapter'
const personalRoutes = Router()

personalRoutes.post('/personal', adaptRouteExpress(CreatePersonalDataFactory()))

export { personalRoutes }
