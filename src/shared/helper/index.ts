export type Replace<T, R> = Omit<T, keyof R> & R
export const customMsgSchemaValidation = (field: string, typeProps: string) => {
  return {
    required_error: `${field} field is required!`,
    invalid_type_error: `${field} field must be a ${typeProps}!`,
  }
}

export const customMsgNonEmpty = (fieldName: string) =>
  `${fieldName} field cannot be empty!`
