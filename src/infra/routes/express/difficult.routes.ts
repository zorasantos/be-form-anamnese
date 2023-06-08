import { Router } from 'express'
import { adaptRouteExpress } from '../../adapters/expressRouteAdapter'
import { CreateDifficultiesAndObjectivesFactory } from '@application/modules/DifficultiesAndObjectives/usecase/CreateDifficultiesAndObjectives/CreateDifficultiesAndObjectivesFactory'
import { validateSchemaExpress } from '@infra/adapters/schemas/validateSchemaExpress'
import { difficultiesAndObjectivesSchema } from '@application/modules/DifficultiesAndObjectives/usecase/CreateDifficultiesAndObjectives/CreateDifficultiesAndObjectivesSchema'
const difficultRoutes = Router()

difficultRoutes.post(
  '/difficult',
  validateSchemaExpress(difficultiesAndObjectivesSchema),
  adaptRouteExpress(CreateDifficultiesAndObjectivesFactory()),
)

export { difficultRoutes }
