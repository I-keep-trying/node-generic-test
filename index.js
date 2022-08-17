const express = require('express')
require('dotenv').config()

const PORT = 8082

const app = express()
app.use(express.static('build'))

app.get('/ping', (req, res) => {
    return res.send({
      error: false,
      message: 'Server is healthy',
    })
  })

  app.listen(PORT, () => {
    console.log('Server started listening on PORT : ' + PORT)
  })