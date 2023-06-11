import { AppError } from '@shared/errors/AppError'
import { HttpResponse } from '../protocols/http'

export const create = (data: unknown): HttpResponse => ({
  statusCode: 201,
  body: data,
})

export const ok = (data: unknown): HttpResponse => ({
  statusCode: 200,
  body: data,
})

export const badRequest = (error: AppError): HttpResponse => ({
  statusCode: error.statusCode,
  body: error.message,
})
