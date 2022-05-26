import compression from 'compression'
import express from 'express'
import 'express-async-errors'
import helmet from 'helmet'
import { cors, errorHandler } from './middlewares'
import routes from './routes'

const api = express()

api.use(express.json())
api.use(express.urlencoded({ extended: true }))
api.use(compression({ threshold: 0 }))
api.use(helmet())
api.use(cors)

api.use('/', routes)

api.use(errorHandler)

export default api
