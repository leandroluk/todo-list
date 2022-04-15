import { Sequelize } from 'sequelize'
import vars from '../vars'
import makeTodosDAO from './todos.dao'

const sequelize = new Sequelize(vars.mysql.uri, {
  dialect: 'mysql',
  logging: false
})

export const todosDAO = makeTodosDAO(sequelize)

export default sequelize
