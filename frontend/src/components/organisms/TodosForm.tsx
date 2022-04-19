import {
  chakra,
  Flex,
  FormControl,
  FormErrorMessage, IconButton,
  Input,
  SlideFade
} from '@chakra-ui/react'
import Joi from 'joi'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { FiCheck, FiPlus } from 'react-icons/fi'
import { useJoiResolver } from '../../hooks'
import { todosStore } from '../../store'
import { Todo } from '../../types'

const validationSchema = Joi.object<Pick<Todo, 'description'>>({
  description: Joi.string().required()
})

const initialState = { description: '' }

export function TodosForm() {
  const todosState = todosStore()
  const resolver = useJoiResolver(validationSchema)
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset
  } = useForm({
    defaultValues: todosState.selectedTodo || initialState,
    resolver
  })

  useEffect(() => {
    if (todosState.selectedTodo) {
      setValue('description', todosState.selectedTodo?.description)
    }
  }, [todosState.selectedTodo, setValue])

  const onSubmit = (value: any) => {
    todosState.updateSelected(value)
    reset()
  }

  return (
    <chakra.form flex="1" onSubmit={handleSubmit(onSubmit)}>
      <Flex gap="4" position="relative" pb="4">
        <FormControl isInvalid={!!errors?.description}>
          <Input
            {...register('description')}
            placeholder="write todo description here..." />
          <SlideFade in={!!errors?.description}>
            <FormErrorMessage>
              {errors?.description?.message}
            </FormErrorMessage>
          </SlideFade>
        </FormControl>

        <IconButton
          colorScheme="green"
          icon={todosState.selectedTodo ? <FiCheck /> : <FiPlus />}
          aria-label="add todo"
          type="submit" />
      </Flex>
    </chakra.form>
  )
}
