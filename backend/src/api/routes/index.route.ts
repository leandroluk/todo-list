import { Router } from 'express'
import db from '../../db'

const indexRoute = Router()

indexRoute.get('/health', async (_, res) => {
  await db.authenticate()
  res.send()
})

export { indexRoute }

