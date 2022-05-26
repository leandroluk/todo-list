import packageJson from 'package.json'
const { env, cwd } = process

export default {
  api: {
    name: packageJson.name,
    path: cwd(),
    port: Number(env.API_PORT || 3001)
  },
  mysql: {
    uri: env.MYSQL_URI || 'mysql://root:root@localhost:3306/todos'
  }
}
