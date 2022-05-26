import { SequelizeModel } from '$/db/types'
import { DataTypes, ModelAttributes, ModelOptions, Sequelize } from 'sequelize'

const schema: ModelAttributes = {
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
}

const options: ModelOptions = {
  timestamps: false,
  tableName: 'todos',
  underscored: true
}

// const associate: SequelizeModel['associate'] = (models, model): void => {}

export default (sequelize: Sequelize): SequelizeModel => {
  const model = sequelize.define('todos', schema, options) as SequelizeModel
  // model.associate = associate
  return model
}
