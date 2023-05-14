import { FastifyPluginAsync } from 'fastify'
import { adaptRouteFastify } from '../../adapters/fastifyRouterAdapter'
import { CreatePersonalDataFactory } from '@application/modules/PersonalData/usecase/CreatePersonalData/CreatePersonalDataFactory'
import { validateSchema } from '@shared/helper/validateSchema'
import { personalDataSchema } from '@application/modules/PersonalData/usecase/CreatePersonalData/CreatePersonalDataSchema'

export const root: FastifyPluginAsync = async (
  fastify,
  opts,
): Promise<void> => {
  fastify.post(
    '/form/personal',
    { preValidation: validateSchema(personalDataSchema) },
    adaptRouteFastify(CreatePersonalDataFactory()),
  )
}
