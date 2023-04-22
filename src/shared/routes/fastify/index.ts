import { FastifyPluginAsync } from 'fastify'
import { ListUserFactory } from '../../../modules/user/ListUser/ListUserFactory'
import { adaptRouteFastify } from '../../../main/adapters/fastifyRouterAdapter'

export const root: FastifyPluginAsync = async (
  fastify,
  opts,
): Promise<void> => {
  fastify.get('/user', adaptRouteFastify(ListUserFactory()))
}
