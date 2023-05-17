import { FastifyRequest, FastifyReply } from 'fastify'
import { HttpRequest } from '@shared/protocols/http'
import { IController } from '@shared/protocols/controller'

// Rever o uso da tipagem, pois o que estão sendo usado não são tipos
export const adaptRouteFastify = (controller: IController) => {
  return async (req: FastifyRequest, res: FastifyReply) => {
    const httpRequest: HttpRequest = {
      body: req.body,
    }
    const httpResponse = await controller.handle(httpRequest)
    res.status(httpResponse.statusCode).send(httpResponse.body)
  }
}
