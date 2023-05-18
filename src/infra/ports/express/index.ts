import 'dotenv/config'
import express from 'express'
import { router } from '../../routes/express'
import { logApplicationInfo } from '../../../infoLog'

const APP_PORT = process.env.PORT_SERVER
const TEST_PORT = 5001

const PORT = process.env.NODE_ENV === 'test' ? TEST_PORT : APP_PORT
const appExpress = express()

appExpress.disable('x-powered-by')

appExpress.use(express.json())
appExpress.use(router)

const server = appExpress.listen(() => {
  logApplicationInfo(PORT as number)
})

export { appExpress }
export const closeAppExpress = server
