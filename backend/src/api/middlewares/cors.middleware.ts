import { RequestHandler } from 'express'

export const cors: RequestHandler = (_, res, next) => {
  res.setHeader('access-control-allow-headers', '*')
  res.setHeader('access-control-allow-methods', '*')
  res.setHeader('access-control-allow-origin', '*')
  next()
}
