import { Router } from 'express'

import { personalRoutes } from './personal.routes'
import { difficultRoutes } from './difficult.routes'
import { familyRoutes } from './family.routes'

const router = Router()

router.use('/v1/form', personalRoutes)
router.use('/v1/form', difficultRoutes)
router.use('/v1/form', familyRoutes)

export { router }
