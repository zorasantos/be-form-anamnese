import { FastifyPluginAsync } from 'fastify'
import { adaptRouteFastify } from '../../adapters/fastifyRouterAdapter'
import { CreatePersonalDataFactory } from '../../../application/modules/PesonalData/usecase/CreatePesonalData/CreatePersonalDataFactory'

export const root: FastifyPluginAsync = async (
  fastify,
  opts,
): Promise<void> => {
  fastify.post('/form/personal', adaptRouteFastify(CreatePersonalDataFactory()))
}
