import { Flex } from '@chakra-ui/react'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export function CenterColumnLayout({
  children
}: Props) {
  return (
    <Flex
      bg="gray.100"
      justify="center"
      align="stretch"
      minH="100vh"
      p="4"
      overflow="hidden">
      <Flex
        bg="white"
        flex="1"
        maxW="2xl"
        p="4"
        borderRadius="8">
        {children}
      </Flex>
    </Flex>
  )
}
