import db from '$/db'
import { Router } from 'express'
import api from './api'

const router = Router()

router.use('/api', api)
router.get('/health', async (_, res) => {
  await db()
  res.sendStatus(200)
})

export default router
