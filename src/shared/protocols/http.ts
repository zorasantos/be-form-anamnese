export type HttpResponse = {
  statusCode: number
  body: unknown
}

export interface HttpRequest {
  body?: unknown
}
