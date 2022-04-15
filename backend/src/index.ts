import api from './api'
import db from './db'
import vars from './vars'

db.authenticate()
  .then(() => {
    api.listen(vars.api.port, () => {
      console.log(`api running on port ${vars.api.port}`)
    })
  })
