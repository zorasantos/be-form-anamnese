import 'dotenv/config'
import fastify from 'fastify'
import { root } from '../../routes/fastify'

const app = fastify({ logger: true })

const startServer = () => {
  app.register(root)
  return app
}

const stopServer = async () => {
  try {
    await app.close()
    console.log('Servidor encerrado')
  } catch (error) {
    console.error('Erro ao encerrar o servidor:', error)
    process.exit(1)
  }
}

export { startServer, stopServer }
