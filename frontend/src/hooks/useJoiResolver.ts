import { Schema, ValidationError } from 'joi'
import { useCallback } from 'react'
import { FieldErrors } from 'react-hook-form'

export const useJoiResolver = <T>(validationSchema: Schema<T>) => useCallback(
  async (data: T) => {
    const result: { values: T, errors: FieldErrors } = {
      values: {} as T,
      errors: {}
    }

    try {
      result.values = await validationSchema
        .validateAsync(data, { abortEarly: false })
    } catch (errors) {
      const { details } = errors as ValidationError
      result.errors = details.reduce((all, current) => ({
        ...all,
        [`${current.path}`]: {
          type: current.type ?? 'validation',
          message: current.message
        }
      }), {})
    }

    return result
  },
  [validationSchema]
)
