import Joi from 'joi'
import { AddTodo, EditTodo, Indexable } from '../../types'
import { runSchema } from './_validator'

export const todosValidator = {
  async paramsId(value: object): Promise<Indexable> {
    return await runSchema(Joi.object<Indexable>({
      id: Joi.number().required().integer().positive()
    }), value)
  },

  async bodyAdd(value: object): Promise<AddTodo> {
    return await runSchema(Joi.object<AddTodo>({
      description: Joi.string().required(),
      isDone: Joi.boolean().default(false),
      isFeatured: Joi.boolean().default(false)
    }), value)
  },

  async bodyEdit(value: object): Promise<EditTodo> {
    return await runSchema(Joi.object<EditTodo>({
      description: Joi.string(),
      isDone: Joi.boolean()
    }), value)
  },
}
