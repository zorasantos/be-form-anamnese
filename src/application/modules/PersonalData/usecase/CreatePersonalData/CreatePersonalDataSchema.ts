import { customMsgSchemaValidation } from '@shared/helper'
import { z } from 'zod'

export const personalDataSchema = z.object({
  body: z.object({
    name: z
      .string(customMsgSchemaValidation('Name'))
      .nonempty({ message: 'Name field cannot be empty!' }),
    birthday: z
      .string(customMsgSchemaValidation('Birthday'))
      .nonempty({ message: 'Birthday field cannot be empty!' }),
    gender: z
      .string(customMsgSchemaValidation('Gender'))
      .nonempty({ message: 'Gender field cannot be empty!' }),
    occupation: z
      .string(customMsgSchemaValidation('Occupation'))
      .nonempty({ message: 'Occupation field cannot be empty!' }),
    maritalStatus: z
      .string(customMsgSchemaValidation('Marital status'))
      .nonempty({ message: 'Marital status field cannot be empty!' }),
    religion: z
      .string(customMsgSchemaValidation('Religion'))
      .nonempty({ message: 'Religion field cannot be empty!' }),
    zipCode: z
      .string(customMsgSchemaValidation('Zip code'))
      .nonempty({ message: 'Zip code field cannot be empty!' }),
    street: z
      .string(customMsgSchemaValidation('Street'))
      .nonempty({ message: 'Street field cannot be empty!' }),
    number: z
      .string(customMsgSchemaValidation('Number'))
      .nonempty({ message: 'Number field cannot be empty!' }),
    addressDetails: z
      .string(customMsgSchemaValidation('Address details'))
      .nonempty({ message: 'Address details field cannot be empty!' }),
    neighborhood: z
      .string(customMsgSchemaValidation('Neighborhood'))
      .nonempty({ message: 'Neighborhood field cannot be empty!' }),
    city: z
      .string(customMsgSchemaValidation('City'))
      .nonempty({ message: 'City field cannot be empty!' }),
    state: z
      .string(customMsgSchemaValidation('State'))
      .nonempty({ message: 'State field cannot be empty!' }),
  }),
})
