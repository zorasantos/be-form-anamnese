import express from 'express'
const app = express()
const port = 3000

app.get('/', function (req, res) {
  res.send('hello world express')
})

app.listen(port, () => {
  console.log(`Express server Running in port ${port}`)
})
