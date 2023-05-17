import { startServer } from '@infra/ports/fastify/server'
import { closeAppExpress } from '@infra/ports/express'

export class FastifyTestServer {
  private static instance: any

  static async createInstance() {
    if (!FastifyTestServer.instance) {
      try {
        FastifyTestServer.instance = await startServer()
        await this.instance.listen({
          host: '0.0.0.0',
          port: process.env.PORT ? Number(process.env.PORT) : 5001,
        })

        console.log('Servidor fastify de test rdando na porta 5001')
      } catch (error) {
        console.log('Erro no servidor de test')
      }
    }

    return FastifyTestServer.instance
  }

  static async closeInstance() {
    if (FastifyTestServer.instance) {
      await FastifyTestServer.instance.close()
      FastifyTestServer.instance = null
      closeAppExpress.close()
    }
  }
}
