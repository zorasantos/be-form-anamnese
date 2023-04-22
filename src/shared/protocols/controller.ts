import { HttpResponse } from './http'

export interface IController<T = unknown> {
  handle(request: T): Promise<HttpResponse>
}
