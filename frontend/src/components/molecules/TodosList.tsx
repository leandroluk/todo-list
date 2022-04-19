import { Flex } from '@chakra-ui/react'
import { todosStore } from '../../store'
import { EmptyTodos } from '../atoms'
import { TodoItem } from './TodoItem'

export function TodosList() {
  const todos = todosStore(state => state.todos)

  return (
    <Flex direction="column" gap="4" flex="1">
      {todos.length
        ? todos.map((todo, key) => <TodoItem key={key} todo={todo} />)
        : <EmptyTodos />
      }
    </Flex>
  )
}
