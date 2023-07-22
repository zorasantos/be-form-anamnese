import { customMsgSchemaValidation } from '@shared/helper'
import { z } from 'zod'

const fieldSchema = (fieldName: string) => {
  return z
    .string(customMsgSchemaValidation(fieldName, 'string'))
    .nonempty({ message: `${fieldName} field cannot be empty!` })
}

export const signInSchema = z.object({
  body: z
    .object({
      name: fieldSchema('Name'),
      password: fieldSchema('Password'),
      term: z.boolean(customMsgSchemaValidation('Term', 'boolean'))
    })
    .nonstrict()
    .refine((data) => Object.keys(data).length <= 3, {
      message: 'Unexpected properties found in request body'
    })
})
