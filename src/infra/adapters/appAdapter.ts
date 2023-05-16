import express from 'express'
import { FastifyInstance } from 'fastify'

interface ServerAdapter {
  listen: () => Promise<void>
  close: () => Promise<void>
}

function createExpressAdapter(app: express.Application): ServerAdapter {
  let serverClose: any
  return {
    listen: () => {
      return new Promise((resolve, reject) => {
        const server = app.listen(process.env.PORT_TEST || 4000, () => {
          resolve(
            console.log(
              `Express server Running in port ${process.env.PORT_TEST}`,
            ),
          )
        })
        serverClose = server
        server.on('error', (err) => {
          reject(err)
        })
      })
    },
    close: () => {
      return new Promise((resolve, reject) => {
        serverClose.server.close(() => {
          resolve()
        })
      })
    },
  }
}

function createFastifyAdapter(app: FastifyInstance): ServerAdapter {
  return {
    listen: () => {
      return new Promise((resolve, reject) => {
        app.listen(process.env.PORT_TEST || 4000, '0.0.0.0', (err) => {
          if (err) {
            reject(err)
            return
          }
          resolve()
        })
      })
    },
    close: () => {
      return new Promise((resolve, reject) => {
        app.close(() => {
          resolve()
        })
      })
    },
  }
}

export { createExpressAdapter, createFastifyAdapter }
