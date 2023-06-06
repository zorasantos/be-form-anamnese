import { Router } from 'express'

import { personalRoutes } from './personal.routes'
import { difficultRoutes } from './difficults.routes'

const router = Router()

router.use('/v1/form', personalRoutes)
router.use('/v1/form', difficultRoutes)

export { router }
