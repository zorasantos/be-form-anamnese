import 'dotenv/config'
import express, { NextFunction, Response, Request } from 'express'
import { router } from '../../routes/express'
import cors from 'cors'

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
