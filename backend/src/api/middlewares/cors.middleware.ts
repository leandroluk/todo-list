import { RequestHandler } from 'express'

export const corsMiddleware: RequestHandler = (_, res, next) => {
  res.setHeader('Access-Control-Allow-Headers', '*')
  res.setHeader('Access-Control-Allow-Methods', '*')
  res.setHeader('Access-Control-Allow-Origin', '*')
  next()
}
