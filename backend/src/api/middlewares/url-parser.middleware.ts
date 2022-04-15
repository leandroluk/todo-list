import { urlencoded } from 'express'

export const urlParserMiddleware = urlencoded({ extended: true })
