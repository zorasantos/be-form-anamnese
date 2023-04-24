import { Router } from 'express'

import { personalRoutes } from './personal.routes'

const router = Router()

router.use('/form', personalRoutes)

export { router }
