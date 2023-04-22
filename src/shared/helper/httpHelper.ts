import { HttpResponse } from '../protocols/http'

export const success = (data: unknown): HttpResponse => ({
  statusCode: 200,
  body: data,
})
