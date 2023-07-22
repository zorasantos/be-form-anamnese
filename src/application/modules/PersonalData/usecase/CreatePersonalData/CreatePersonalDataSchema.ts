import { customMsgSchemaValidation } from '@shared/helper'
import { z } from 'zod'

const fieldSchema = (fieldName: string) => {
  return z
    .string(customMsgSchemaValidation(fieldName, 'string'))
    .nonempty({ message: `${fieldName} field cannot be empty!` })
}

export const personalDataSchema = z.object({
  body: z
    .object({
      name: fieldSchema('Name'),
      birthday: fieldSchema('Birthday'),
      gender: fieldSchema('Gender'),
      occupation: fieldSchema('Occupation'),
      maritalStatus: fieldSchema('Marital status'),
      religion: fieldSchema('Religion'),
      zipCode: fieldSchema('Zip code'),
      street: fieldSchema('Street'),
      number: fieldSchema('Number'),
      addressDetails: z.string(
        customMsgSchemaValidation('Address detail', 'string')
      ),
      neighborhood: fieldSchema('Neighborhood'),
      city: fieldSchema('City'),
      state: fieldSchema('State')
    })
    .nonstrict()
    .refine((data) => Object.keys(data).length <= 13, {
      message: 'Unexpected properties found in request body'
    })
})
