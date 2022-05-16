import express from 'express'
import 'express-async-errors'
import {
  bodyParserMiddleware,
  corsMiddleware,
  errorHandlerMiddleware,
  loggerMiddleware,
  urlParserMiddleware
} from './middlewares'
import {
  indexRoute, todosRoute
} from './routes'

const api = express()

// req middlewares
api.use(bodyParserMiddleware)
api.use(corsMiddleware)
api.use(urlParserMiddleware)
api.use(loggerMiddleware)

// routes
api.use('/todos', todosRoute)
api.use('/', indexRoute)

// res middlewares
api.use(errorHandlerMiddleware)

export default api
