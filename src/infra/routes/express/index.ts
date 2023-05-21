import { Router } from 'express'

import { personalRoutes } from './personal.routes'

const router = Router()

router.use('/v1/form', personalRoutes)

export { router }
