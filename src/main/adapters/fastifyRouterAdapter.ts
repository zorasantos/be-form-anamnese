import { FastifyRequest, FastifyReply } from 'fastify'
import { HttpRequest } from '../../shared/protocols/http'
import { IController } from '../../shared/protocols/controller'

export const adaptRouteFastify = (controller: IController) => {
  return async (req: FastifyRequest, res: FastifyReply) => {
    console.log('adapter fastify', req.body)
    const httpRequest: HttpRequest = {
      body: req.body,
    }
    const httpResponse = await controller.handle(httpRequest)
    res.status(httpResponse.statusCode).send(httpResponse.body)
  }
}
