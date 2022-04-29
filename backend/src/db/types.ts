import { Model, ModelStatic } from 'sequelize'

export interface SequelizeModel extends ModelStatic<Model> {
  associate?: (models: Record<string, ModelStatic<Model>>, model: ModelStatic<Model>) => void
}
