import fastify from 'fastify'

const app = fastify()

app.get('/', function (req, reply) {
  return reply.status(200).send('hello world fastify')
})

app
  .listen({
    host: '0.0.0.0',
    port: process.env.PORT ? Number(process.env.PORT) : 3000,
  })
  .then(() => {
    console.log('Fastify server Running in port 3000')
  })
