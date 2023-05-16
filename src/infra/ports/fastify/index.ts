import 'dotenv/config'
import fastify from 'fastify'
import { root } from '../../routes/fastify'

const APP_PORT = 5002
const TEST_PORT = 5003

const startServer = async (PORT?: number) => {
  const app = fastify({ logger: true })
  app.register(root)

  try {
    await app.listen({
      host: '0.0.0.0',
      port: process.env.PORT ? Number(process.env.PORT) : PORT,
    })

    console.log(`Fastify server Running in port ${PORT}`)
  } catch (error) {
    app.log.error(error)
    process.exit(1)
  }
  return app
}

const PORT = process.env.NODE_ENV === 'test' ? TEST_PORT : APP_PORT
const runServer = async () => {
  if (process.env.SERVER_TYPE === 'fastify') {
    await startServer(PORT)
  }
}
runServer()
export { startServer, runServer }
