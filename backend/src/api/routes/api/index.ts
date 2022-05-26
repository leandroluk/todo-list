import logger from '$/logger'
import { Router } from 'express'
import expressWinston from 'express-winston'
import { todosRoute } from './todos.route'

const router = Router()

router.use(expressWinston.logger({ winstonInstance: logger }))

router.use('/todos', todosRoute)

export default router
