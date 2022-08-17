const express = require('express')
require('dotenv').config()

const PORT = process.env.PORT || 8082

const app = express()
app.use(express.static('build'))

app.get('/ping', (req, res) => {
  return res.send({
    error: false,
    message: 'Server is healthy',
  })
})

app.listen(process.env.PORT || 8082, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`)
})
