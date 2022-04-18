const { env, cwd } = process

export default {
  api: {
    path: cwd(),
    port: Number(env.API_PORT || 3001)
  },
  mysql: {
    uri: env.MYSQL_URI || 'mysql://root:root@localhost:3306/db'
  },
  mongo: {
    uri: env.MONGO_URI || 'mongodb://localhost:27017/db'
  }
}
