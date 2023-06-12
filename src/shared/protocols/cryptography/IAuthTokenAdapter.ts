export interface IAuthTokenAdapter {
  generateToken(payload: object, sub: string, exp: string): string
  verifyToken(token: string): boolean
}
