import { Divider, Flex, Heading, useToast } from '@chakra-ui/react'
import { useEffect } from 'react'
import { todosStore } from '../../store'
import { TodosList } from '../molecules'
import { TodosForm } from '../organisms'
import { CenterColumnLayout } from '../templates'

export function TodosPage() {
  const todosState = todosStore()
  const toast = useToast()

  useEffect(() => {
    if (todosState.error) {
      console.log(todosState.error)
      toast({
        description: todosState.error.message,
        status: 'error',
        duration: 9000,
        isClosable: true
      })
    }
  }, [todosState.error])

  return (
    <CenterColumnLayout>
      <Flex
        flex="1"
        direction="column"
        justify="stretch"
        align="stretch"
        maxW="100%">
        <Heading pb="4" textAlign="center" color="green">
          Todo&apos;s
        </Heading>

        <Flex>
          <TodosForm />
        </Flex>

        <Divider mb="4" />

        <Flex flex="1" justify="stretch" align="stretch" overflowY="auto">
          <TodosList />
        </Flex>
      </Flex>
    </CenterColumnLayout>
  )
}
