const express = require('express')
require('dotenv').config()

const PORT = process.env.PORT || 8082

const app = express()

app.use((req, res, next) => {
  res.setHeader('Permissions-Policy', 'geolocation=(), interest-cohort=()')
  res.setHeader(
    'Strict-Transport-Security',
    'max-age=31536000;includeSubDomains'
  )
  res.setHeader('X-Frame-Options', 'SAMEORIGIN')
  res.setHeader('X-Content-Type-Options', 'nosniff')
  res.setHeader('Referrer-Policy', 'strict-origin')
  res.setHeader('Cache-Control', 'max-age=31536000')
  next()
})

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
