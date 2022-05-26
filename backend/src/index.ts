import api from './api'
import db from './db'
import logger from './logger'
import vars from './vars'

db()
  .then(() => {
    api.listen(vars.api.port, () => {
      logger.info(`${vars.api.name} running on port ${vars.api.port}`)
    })
  })
  .catch(({ message, ...e }: Error) => {
    logger.error(message, e) && process.exit(1)
  })
