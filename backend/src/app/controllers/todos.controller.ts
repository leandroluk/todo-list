import { Todo } from '../../types'
import { todosService } from '../services'
import { todosValidator } from '../validators'

export const todosController = {
  async get(params: any): Promise<Todo> {
    const { id } = await todosValidator.paramsId(params)
    const result = await todosService.get(id)
    return result
  },

  async edit(params: any, body: any): Promise<Todo> {
    const [{ id }, changes] = await Promise.all([
      todosValidator.paramsId(params),
      todosValidator.bodyEdit(body)
    ])
    await todosService.edit(id, changes)
    const result = await todosService.get(id)
    return result
  },

  async remove(params: any): Promise<void> {
    const { id } = await todosValidator.paramsId(params)
    await todosService.remove(id)
  },

  async add(body: any): Promise<Todo> {
    const data = await todosValidator.bodyAdd(body)
    const id = await todosService.add(data)
    const result = await todosService.get(id)
    return result
  },

  async list(): Promise<Todo[]> {
    const result = await todosService.list()
    return result
  },
}
