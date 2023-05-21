import { FastifyPluginAsync } from 'fastify'
import { adaptRouteFastify } from '../../adapters/fastifyRouterAdapter'
import { CreatePersonalDataFactory } from '@application/modules/PersonalData/usecase/CreatePersonalData/CreatePersonalDataFactory'
import { validateSchemaFastify } from '@infra/adapters/schemas/PersonalData/validateSchemaFastify'
import { personalDataSchema } from '@application/modules/PersonalData/usecase/CreatePersonalData/CreatePersonalDataSchema'

export const personalDataRouter: FastifyPluginAsync = async (
  fastify,
  opts,
): Promise<void> => {
  fastify.post(
    '/form/personal',
    { preValidation: validateSchemaFastify(personalDataSchema) },
    adaptRouteFastify(CreatePersonalDataFactory()),
  )
}
