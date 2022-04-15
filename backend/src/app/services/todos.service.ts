import { AddTodo, EditTodo, Todo } from '../../types'
import { NotFoundError } from '../errors'
import { todosModel } from '../models'

export const todosService = {
  async get(id: Todo['id']): Promise<Todo> {
    const result = await todosModel.get(id)
    if (!result) throw new NotFoundError()
    return result
  },

  async edit(id: Todo['id'], changes: EditTodo): Promise<void> {
    const exists = await todosModel.exists(id)
    if (!exists) throw new NotFoundError()
    await todosModel.edit(id, changes)
  },

  async remove(id: Todo['id']): Promise<void> {
    const exists = await todosModel.exists(id)
    if (!exists) throw new NotFoundError()
    await todosModel.remove(id)
  },

  async add(data: AddTodo): Promise<Todo['id']> {
    const result = await todosModel.add(data)
    return result
  },

  async list(): Promise<Todo[]> {
    const result = await todosModel.list()
    return result
  }
}
