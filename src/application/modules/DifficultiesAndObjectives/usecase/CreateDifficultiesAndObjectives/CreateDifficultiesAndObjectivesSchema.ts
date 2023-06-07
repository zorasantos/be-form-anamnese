import { customMsgSchemaValidation } from '@shared/helper'
import { z } from 'zod'

const fieldSchema = (fieldName: string) => {
  return z
    .string(customMsgSchemaValidation(fieldName, 'string'))
    .nonempty({ message: `${fieldName} field cannot be empty!` })
}

export const difficultiesAndObjectivesSchema = z.object({
  body: z
    .object({
      difficultFirst: fieldSchema('Difficult first'),
      difficultSecond: z.string(
        customMsgSchemaValidation('Difficult Second', 'string'),
      ),
      difficultThird: z.string(
        customMsgSchemaValidation('Difficult Third', 'string'),
      ),
      objective: z.string(customMsgSchemaValidation('Objective', 'string')),
    })
    .nonstrict()
    .refine((data) => Object.keys(data).length <= 4, {
      message: 'Unexpected properties found in request body',
    }),
})
