import { FastifyRequest, FastifyReply } from 'fastify'
import { ListUserController } from '../../modules/user/ListUser/ListUserController'
import { HttpRequest } from '../../shared/protocols/http'

export const adaptRouteFastify = (controller: ListUserController) => {
  return async (req: FastifyRequest, res: FastifyReply) => {
    const httpRequest: HttpRequest = {
      body: req.body,
    }
    const httpResponse = await controller.handle(httpRequest)
    res.status(httpResponse.statusCode).send(httpResponse.body)
  }
}
