import { ErrorRequestHandler } from 'express'

export const errorHandlerMiddleware: ErrorRequestHandler = (err, req, res, next) => {
  const { name, message } = err
  switch (name) {
    case 'ValidationError': res.status(400).json({ message }); break
    case 'NotFoundError': res.status(404).json({ message }); break
    case 'InvalidQueryError': res.status(422).json({ message }); break
    default: console.log(message); res.sendStatus(500)
  }
  next()
}
