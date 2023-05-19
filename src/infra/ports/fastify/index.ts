import { startServer } from './server'

startServer().listen({
  host: '0.0.0.0',
  port: process.env.PORT_SERVER ? Number(process.env.PORT_SERVER) : 5000,
})
