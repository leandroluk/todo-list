import { AddTodo, EditTodo, Todo } from '../types'
import vars from '../vars'
import { makeAxios } from './_service'

const axios = makeAxios()
const baseUrl = vars.api.uri + 'todos'

export const todosService = {
  async edit(id: Todo['id'], changes: EditTodo): Promise<Todo> {
    const result = await axios.put(`${baseUrl}/${id}`, changes)
    return result.data
  },

  async remove(id: Todo['id']): Promise<void> {
    await axios.delete(`${baseUrl}/${id}`)
  },

  async list(): Promise<Todo[]> {
    const result = await axios.get(baseUrl)
    return result.data as Todo[]
  },

  async add(data: AddTodo): Promise<Todo> {
    const result = await axios.post(baseUrl, data)
    return result.data
  }
}
