import express from 'express'
import cors from 'cors'

const PORT = process.env.PORT || 3000

express()
  .use('*', cors({ origin: '*' }))
  .get('/', (req, res) => res.json({ healthCheck: true }))
  .listen(PORT, () => console.log(`Running! Access http://localhost:${PORT}`))