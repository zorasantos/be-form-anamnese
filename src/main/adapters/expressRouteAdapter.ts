import { Request, Response } from 'express'
import { ListUserController } from '../../modules/user/ListUser/ListUserController'
import { HttpRequest } from '../../shared/protocols/http'

export const adaptRouteExpress = (controller: ListUserController) => {
  return async (req: Request, res: Response) => {
    const httpRequest: HttpRequest = {
      body: req.body,
    }
    const httpResponse = await controller.handle(httpRequest)
    res.status(httpResponse.statusCode).json(httpResponse.body)
  }
}
