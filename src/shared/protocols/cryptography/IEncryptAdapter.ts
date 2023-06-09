export interface IEncryptAdapter {
  hash(value: string): string
  compare(value: string, hash: string): Promise<boolean>
}
