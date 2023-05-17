import { startServer } from './server'

startServer().listen({
  host: '0.0.0.0',
  port: process.env.PORT ? Number(process.env.PORT) : 5000,
})
