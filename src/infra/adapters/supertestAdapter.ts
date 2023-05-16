import 'dotenv/config'
import { app as appExpress } from '@infra/ports/express/index'
import { app as appFastify } from '@infra/ports/fastify/index'
import request from 'supertest'

const serverType = process.env.SERVER_TYPE
const appServer = serverType === 'express' ? appExpress : appFastify.server

export function createAppSupertestAdapter() {
  return {
    get: (url: string) => request(appServer).get(url),
    post: (url: string) => request(appServer).post(url),
    put: (url: string) => request(appServer).put(url),
    delete: (url: string) => request(appServer).delete(url),
  }
}

export { appServer }
