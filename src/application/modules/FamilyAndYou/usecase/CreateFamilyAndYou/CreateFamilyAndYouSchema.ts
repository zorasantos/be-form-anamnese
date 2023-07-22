import { customMsgSchemaValidation } from '@shared/helper'
import { z } from 'zod'

const fieldSchema = (fieldName: string) => {
  return z
    .string(customMsgSchemaValidation(fieldName, 'string'))
    .nonempty({ message: `${fieldName} field cannot be empty!` })
}

export const familyAndYouSchema = z.object({
  body: z
    .object({
      personalDataId: fieldSchema('Personal data id'),
      placeOfBirth: fieldSchema('Place Of birth'),
      fatherAge: z.number(customMsgSchemaValidation('Father age', 'number')),
      fatherDeathAge: z.number(
        customMsgSchemaValidation('Father death age', 'number')
      ),
      ageWhenFatherDied: z.number(
        customMsgSchemaValidation('Age when father died', 'number')
      ),
      fatherOccupation: z.string(
        customMsgSchemaValidation('Father occupation', 'string')
      ),
      fatherDescription: z.string(
        customMsgSchemaValidation('Father description', 'string')
      ),
      motherAge: z.number(customMsgSchemaValidation('Mother age', 'number')),
      motherDeathAge: z.number(
        customMsgSchemaValidation('Mother death age', 'number')
      ),
      ageWhenMotherDied: z.number(
        customMsgSchemaValidation('Age when mother died', 'number')
      ),
      motherOccupation: z.string(
        customMsgSchemaValidation('Mother occupation', 'string')
      ),
      motherDescription: z.string(
        customMsgSchemaValidation('Mother description', 'string')
      ),
      problemsWithParents: z.string(
        customMsgSchemaValidation('Problems with parents', 'string')
      ),
      relationshipBrothers: z.string(
        customMsgSchemaValidation('Relationship brothers', 'string')
      ),
      atmosphereHome: z.string(
        customMsgSchemaValidation('Atmosphere home', 'string')
      ),
      importantChanges: z.string(
        customMsgSchemaValidation('Important changes', 'string')
      ),
      anyoneImportantForMe: z.string(
        customMsgSchemaValidation('Anyone important for me', 'string')
      ),
      psychiatricTreatment: z.number(
        customMsgSchemaValidation('Psychiatric treatment', 'number')
      ),
      historyOfMentalIllness: z.number(
        customMsgSchemaValidation('History of mentalIllness', 'number')
      ),
      member: z.array(
        z.object({
          name: z.string(),
          problem: z.string()
        })
      ),
      children: z.array(
        z.object({
          name: z.string(),
          occupation: z.string().optional(),
          age: z.number().optional(),
          gender: z.string().optional(),
          comments: z.string().optional()
        })
      ),
      anyMemberFamilySuicideAttempt: z.number(
        customMsgSchemaValidation('Any member family suicide attempt', 'number')
      ),
      anyMemberFamilyDiedBySuicide: z.number(
        customMsgSchemaValidation('Any member family died by suicide', 'number')
      ),
      manyChildrenThereInFamily: z.number(
        customMsgSchemaValidation('Many children there in family', 'number')
      ),
      botherYou: z.string(customMsgSchemaValidation('Bother you', 'string'))
    })
    .nonstrict()
    .refine((data) => Object.keys(data).length <= 25, {
      message: 'Unexpected properties found in request body'
    })
})
