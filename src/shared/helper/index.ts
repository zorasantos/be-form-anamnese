export type Replace<T, R> = Omit<T, keyof R> & R
export const customMsgSchemaValidation = (field: string) => {
  return {
    required_error: `${field} field is required!`,
    // Será necessário passar o type do campo
    invalid_type_error: `${field} field must be a string!`,
  }
}
