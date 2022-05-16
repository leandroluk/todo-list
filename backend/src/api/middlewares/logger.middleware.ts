import expressWinston from 'express-winston'
import winston from 'winston'

export const loggerMiddleware = expressWinston.logger({
  transports: [new winston.transports.Console()],
  format: winston.format.json(),
  meta: true,
  msg: 'HTTP {{req.method}} {{req.url}}',
  expressFormat: true,
  colorize: false,
  ignoreRoute: req => req.url.includes('/health')
})
