import 'dotenv/config'
import 'express-async-errors'
import express, { NextFunction, Response, Request } from 'express'
import { router } from '../../routes/express'
import cors from 'cors'
import { AppError } from '@shared/errors/AppError'
import { JsonWebTokenError } from 'jsonwebtoken'

const APP_PORT = process.env.PORT_SERVER
const TEST_PORT = 5001

const PORT = process.env.NODE_ENV === 'test' ? TEST_PORT : APP_PORT
const appExpress = express()

appExpress.disable('x-powered-by')

appExpress.use(cors())
appExpress.use(express.json())
appExpress.use(router)
appExpress.use(
  (err: Error, _req: Request, res: Response, _next: NextFunction) => {
    if (err instanceof AppError) {
      return res.status(err.statusCode).json({
        message: err.message.message,
      })
    }

    if (err instanceof JsonWebTokenError) {
      return res.status(401).json({
        message: 'unauthorized',
      })
    }

    return res.status(500).json({
      status: 'error',
      message: `Internal server error - ${err.message}`,
    })
  },
)

const server = appExpress.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}`)
})

export { appExpress }
export const closeAppExpress = server
