import immer from 'immer'
import zustand from 'zustand'
import { todosService } from '../services'
import { AddTodo, EditTodo, Todo } from '../types'

type TodosStore = {
  todos: Todo[],
  selectedTodo?: Todo
  select (todo: Todo): void
  remove (id: Todo['id']): Promise<void>
  list (): Promise<void>
  updateSelected (data: AddTodo | EditTodo): Promise<void>
  update (id: Todo['id'], changes: EditTodo): Promise<void>
}

export const todosStore = zustand<TodosStore>((set, get) => ({
  todos: [],
  selectedTodo: undefined,
  select (todo: Todo): void {
    set(immer(state => { state.selectedTodo = todo }))
  },
  async remove (id: Todo['id']): Promise<void> {
    await todosService.remove(id)
    get().list()
  },
  async list (): Promise<void> {
    const todos = await todosService.list()
    set(immer(state => { state.todos = todos }))
  },
  async updateSelected (data: AddTodo | EditTodo): Promise<void> {
    const { selectedTodo, list } = get()
    selectedTodo
      ? await todosService.edit(selectedTodo.id, data)
      : await todosService.add(data as AddTodo)
    list()
    set(immer(state => { state.selectedTodo = undefined }))
  },
  async update (id: Todo['id'], changes: EditTodo): Promise<void> {
    await todosService.edit(id, changes)
  }
}))
