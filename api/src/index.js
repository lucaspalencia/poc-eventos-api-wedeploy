import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import api from './api'
import auth from './auth'

const PORT = process.env.PORT || 3000

express()
  .use('*', cors({ origin: '*' }))
  .use(bodyParser.urlencoded({ extended: false }))
  .use(bodyParser.json())
  .use('/auth', auth)
  .use('/events', api)
  .get('/', (req, res) => res.json({ healthCheck: true }))
  .listen(PORT, () => console.log(`Running port: ${PORT}`))
