export type Indexable = {
  id: number
}

export type Entity = Indexable & {
  createdAt: Date
  updatedAt?: Date
}

export type Todo = Entity & {
  description: string
  isDone: number
  isFeatured: number
}

export type AddTodo = Omit<Todo, keyof Entity>
export type EditTodo = Partial<Omit<Todo, keyof Entity>>
