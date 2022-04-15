import { ErrorRequestHandler } from 'express'

export const errorHandlerMiddleware: ErrorRequestHandler = (err, _req, res, _next) => {
  const { name, message } = err
  switch (name) {
    case 'ValidationError': res.status(400).json({ message }); break
    case 'NotFoundError': res.status(404).json({ message }); break
    default:
      console.log(message)
      res.sendStatus(500)
  }
}
