import 'dotenv/config'
import request from 'supertest'
import { appExpress, closeAppExpress } from '@infra/ports/express'
import { FastifyTestServer } from '@shared/helper/instanceTest'

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
    const app = await FastifyTestServer.createInstance()
    return app
  }

  static async close() {
    await FastifyTestServer.closeInstance()
  }
}

export class CustomSupertestRequest {
  private static async getAppInstance() {
    const app = await FastifyTestServer.createInstance()
    return serverType === 'express' ? appExpress : app.server
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
