import 'dotenv/config'
import fastify from 'fastify'
import { root } from '../../routes/fastify'
const PORT = 5000

export const app = fastify({ logger: true })
app.register(root)
app
  .listen({
    host: '0.0.0.0',
    port: process.env.PORT ? Number(process.env.PORT) : PORT,
  })
  .then(() => {
    console.log(`Fastify server Running in port ${PORT}`)
  })
