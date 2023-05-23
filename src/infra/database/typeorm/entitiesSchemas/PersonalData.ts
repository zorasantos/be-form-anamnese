import { PersonalData } from '@application/modules/PersonalData/entities/PersonalData'
import { EntitySchema } from 'typeorm'

export const PersonalDataEntitySchema = new EntitySchema<PersonalData>({
  name: 'personalData',
  columns: {
    id: {
      type: 'uuid',
      primary: true,
      generated: 'uuid',
    },
    name: {
      type: String,
      nullable: false,
    },
    birthday: {
      type: String,
      nullable: false,
    },
    gender: {
      type: String,
      nullable: false,
    },
    occupation: {
      type: String,
      nullable: false,
    },
    maritalStatus: {
      type: String,
      nullable: false,
    },
    religion: {
      type: String,
      nullable: false,
    },
    zipCode: {
      type: String,
      nullable: false,
    },
    street: {
      type: String,
      nullable: false,
    },
    number: {
      type: String,
      nullable: false,
    },
    addressDetails: {
      type: String,
      nullable: false,
    },
    neighborhood: {
      type: String,
      nullable: false,
    },
    city: {
      type: String,
      nullable: false,
    },
    state: {
      type: String,
      nullable: false,
    },
    createdAt: {
      type: Date,
      nullable: false,
      createDate: true,
    },
    updatedAt: {
      type: Date,
      nullable: false,
      updateDate: true,
      default: 'now()',
    },
  },
})
