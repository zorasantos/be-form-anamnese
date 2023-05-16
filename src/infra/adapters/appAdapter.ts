import 'dotenv/config'
import request from 'supertest'
import { startServer } from '@infra/ports/fastify'
import { appExpress, closeAppExpress } from '@infra/ports/express'

const serverType = process.env.SERVER_TYPE

export class ExpressAdapterIntegrationTest {
  static listen() {
    return appExpress
  }

  static close() {
    closeAppExpress.close()
  }
}

export class FastifyAdapterIntegrationTest {
  static async listen() {
    const app = await startServer()
    return app.server
  }

  static async close() {
    const app = await startServer()
    closeAppExpress.close()
    return app.close()
  }
}

export class customSupertestRequest {
  private static async getAppInstance() {
    const server = await startServer()
    return serverType === 'express' ? appExpress : server.server
  }

  static async post(url: string, data: any) {
    const app = await this.getAppInstance()
    return request(app).post(url).send(data)
  }

  static async get(url: string) {
    const app = await this.getAppInstance()
    return request(app).get(url)
  }

  static async delete(url: string) {
    const app = await this.getAppInstance()
    return request(app).delete(url)
  }

  static async update(url: string, data: any) {
    const app = await this.getAppInstance()
    return request(app).put(url).send(data)
  }
}

export const adapter =
  serverType === 'fastify'
    ? FastifyAdapterIntegrationTest
    : ExpressAdapterIntegrationTest
