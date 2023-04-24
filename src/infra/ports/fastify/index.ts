import fastify from 'fastify'
import { root } from '../../routes/fastify'

const app = fastify({ logger: true })
app.register(root)
app
  .listen({
    host: '0.0.0.0',
    port: process.env.PORT ? Number(process.env.PORT) : 3000,
  })
  .then(() => {
    console.log('Fastify server Running in port 3000')
  })
