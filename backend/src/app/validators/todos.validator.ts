import Joi from 'joi'
import { AddTodo, EditTodo, Indexable } from '../../types'
import { runSchema } from './_validators'

export const todosValidator = {
  async paramsId (value: any): Promise<Indexable> {
    return await runSchema(Joi.object<Indexable>({
      id: Joi.number().required().integer().positive()
    }), value)
  },

  async bodyAdd (value: any): Promise<AddTodo> {
    return await runSchema(Joi.object<AddTodo>({
      description: Joi.string().required(),
      isDone: Joi.boolean().default(false)
    }), value)
  },

  async bodyEdit (value: any): Promise<EditTodo> {
    return await runSchema(Joi.object<EditTodo>({
      description: Joi.string(),
      isDone: Joi.boolean()
    }), value)
  },
}
