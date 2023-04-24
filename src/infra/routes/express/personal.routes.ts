import { Router } from 'express'
import { adaptRouteExpress } from '../../adapters/expressRouteAdapter'
import { CreatePersonalDataFactory } from '../../../application/modules/PesonalData/usecase/CreatePesonalData/CreatePersonalDataFactory'
const personalRoutes = Router()

personalRoutes.post('/personal', adaptRouteExpress(CreatePersonalDataFactory()))

export { personalRoutes }
