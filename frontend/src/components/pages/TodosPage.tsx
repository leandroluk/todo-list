import { Divider, Flex, Heading } from '@chakra-ui/react'
import { TodosList } from '../molecules'
import { TodosForm } from '../organisms'
import { CenterColumnLayout } from '../templates'

export function TodosPage () {
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
