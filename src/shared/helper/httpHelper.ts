import { HttpResponse } from '../protocols/http'

export const create = (data: unknown): HttpResponse => ({
  statusCode: 201,
  body: data,
})
