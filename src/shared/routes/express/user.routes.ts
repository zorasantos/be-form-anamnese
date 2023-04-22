import { Router } from 'express'
import { ListUserFactory } from '../../../modules/user/ListUser/ListUserFactory'
import { adaptRouteExpress } from '../../../main/adapters/expressRouteAdapter'
const userRoutes = Router()

userRoutes.get('/', adaptRouteExpress(ListUserFactory()))

export { userRoutes }
