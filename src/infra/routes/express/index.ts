import { Router } from 'express'

import { personalRoutes } from './personal.routes'
import { difficultRoutes } from './difficult.routes'
import { familyRoutes } from './family.routes'
import { signupRoutes } from './signUp.routes'

const router = Router()

router.use('/v1/form', personalRoutes)
router.use('/v1/form', difficultRoutes)
router.use('/v1/form', familyRoutes)
router.use('/v1/form', signupRoutes)

export { router }
