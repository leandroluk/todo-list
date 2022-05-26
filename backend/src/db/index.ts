import vars from '$/vars'
import { Sequelize } from 'sequelize'
import makeTodosDAO from './daos/todos.dao'

const sequelize = new Sequelize(vars.mysql.uri, {
  dialect: 'mysql',
  logging: false
})

export const TodosDAO = makeTodosDAO(sequelize)

const models = {
  TodosDAO
}

Object
  .values(models)
  .forEach(model => model.associate?.(models, model))

export default async () => {
  await sequelize.authenticate()
}
