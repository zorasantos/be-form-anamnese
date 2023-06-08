import { customMsgSchemaValidation } from '@shared/helper'
import { z } from 'zod'

const fieldSchema = (fieldName: string) => {
  return z
    .string(customMsgSchemaValidation(fieldName, 'string'))
    .nonempty({ message: `${fieldName} field cannot be empty!` })
}

export const signUpSchema = z.object({
  body: z
    .object({
      name: fieldSchema('Name'),
      birthday: fieldSchema('Birthday'),
      password: fieldSchema('Gender'),
    })
    .nonstrict()
    .refine((data) => Object.keys(data).length <= 3, {
      message: 'Unexpected properties found in request body',
    }),
})
