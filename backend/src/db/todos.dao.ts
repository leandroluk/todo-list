import { DataTypes, Model, Sequelize } from 'sequelize'
import { Indexable, Todo } from '../types'

export default (db: Sequelize) => db.define<Model<Todo, Omit<Todo, keyof Indexable>>>('todos', {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE(3),
    allowNull: false,
  },
  updatedAt: {
    type: DataTypes.DATE(3),
    allowNull: true
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  isDone: {
    type: DataTypes.TINYINT,
    allowNull: false
  }
}, {
  timestamps: false,
  tableName: 'todos',
})
