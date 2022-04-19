import { chakra, Checkbox, Flex, IconButton, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { format } from 'date-fns'
import { FiMoreHorizontal } from 'react-icons/fi'
import { DATE_FORMAT } from '../../consts'
import { todosStore } from '../../store'
import { Todo } from '../../types'

type Props = {
  todo: Todo
}

export function TodoItem({ todo }: Props) {
  const todosState = todosStore()

  const date = (field: any) => format(new Date(field), DATE_FORMAT)
  const toggleTodo = () => todosState.update(todo.id, { isDone: Number(!todo.isDone) })

  return (
    <Flex
      borderRadius="8"
      border="1px solid"
      borderColor="gray.200"
      p="2"
      gap="4"
    >
      <Checkbox
        colorScheme="green"
        pl="2"
        size="lg"
        checked={!!todo.isDone}
        onClick={toggleTodo}
        outlineColor="green" />

      <Flex direction="column" flex="1">
        <Flex>{todo.description}</Flex>
        <chakra.span fontSize="xs" fontStyle="italic" color="gray.400">
          {todo.updatedAt
            ? <>last update at: {date(todo.updatedAt)}</>
            : <>created at: {date(todo.createdAt)}</>
          }
        </chakra.span>
      </Flex>

      <Menu>
        <MenuButton
          color="green"
          background="white"
          as={IconButton}
          icon={<FiMoreHorizontal />}
          aria-label="todo's options" />
        <MenuList>
          <MenuItem
            onClick={() => todosState.select(todo)}>
            Edit
          </MenuItem>
          <MenuItem
            onClick={() => todosState.remove(todo.id)}>
            Remove
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  )
}
