import { z } from 'zod'

export const personalDataSchema = z.object({
  name: z.string(),
  birthday: z.string(),
  gender: z.string(),
  occupation: z.string(),
  maritalStatus: z.string(),
  religion: z.string(),
  zipCode: z.string(),
  street: z.string(),
  number: z.string(),
  addressDetails: z.string(),
  neighborhood: z.string(),
  city: z.string(),
  state: z.string(),
})
