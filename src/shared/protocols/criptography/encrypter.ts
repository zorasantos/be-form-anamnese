export interface IEncrypter {
  encrypt(payload: object, sub: string, exp: string): string
}
