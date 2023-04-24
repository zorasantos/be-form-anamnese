import express from 'express'
import { router } from '../../routes/express'

const port = 3000
const app = express()

app.disable('x-powered-by')

app.use(express.json())
app.use(router)

app.listen(port, () => {
  console.log(`Express server Running in port ${port}`)
})
