const express = require('express')
const bodyParser = require('body-parser')
const taskRoutes = require('./routes/taskRoutes')

const app = express()

app.use(bodyParser.json())
app.use('/api', taskRoutes)

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`API rodando na porta ${port}`)
})