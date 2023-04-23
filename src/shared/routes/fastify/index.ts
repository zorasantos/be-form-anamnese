import { FastifyPluginAsync } from 'fastify'
import { CreatePersonalDataFactory } from '../../../modules/PesonalData/usecase/CreatePesonalData/CreatePersonalDataFactory'
import { adaptRouteFastify } from '../../../main/adapters/fastifyRouterAdapter'

export const root: FastifyPluginAsync = async (
  fastify,
  opts,
): Promise<void> => {
  fastify.post('/form/personal', adaptRouteFastify(CreatePersonalDataFactory()))
}
