import { AddTodo, EditTodo, Indexable } from '$/app/types'
import Joi from 'joi'
import { runSchema } from './_validators'

export const todosValidator = {
  paramsId: runSchema(Joi.object<Indexable>({
    id: Joi.number().required().integer().positive()
  })),

  bodyAdd: runSchema(Joi.object<AddTodo>({
    description: Joi.string().required(),
    isDone: Joi.boolean().default(false)
  })),

  bodyEdit: runSchema(Joi.object<EditTodo>({
    description: Joi.string(),
    isDone: Joi.boolean()
  })),
}
