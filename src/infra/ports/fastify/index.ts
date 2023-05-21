import { startServer } from './server'

const app = async () => {
  try {
    startServer().listen({
      host: '0.0.0.0',
      port: process.env.PORT_SERVER ? Number(process.env.PORT_SERVER) : 5000,
    })
    console.log(`Server fastify running in port ${5000}`)
  } catch (error) {
    console.error(`Erro server fastify`, error)
  }
}

app()
