import 'dotenv/config'
import express from 'express'
import { router } from '../../routes/express'

const APP_PORT = 5000
const TEST_PORT = 5001

const PORT = process.env.NODE_ENV === 'test' ? TEST_PORT : APP_PORT
const appExpress = express()

appExpress.disable('x-powered-by')

appExpress.use(express.json())
appExpress.use(router)

const server = appExpress.listen(PORT, () => {
  console.log(`Express server Running in port ${PORT}`)
})

export { appExpress }
export const closeAppExpress = server
