import { AppError } from './AppError'

describe('AppError', () => {
  it('should create an instance of AppError with default status code 500', () => {
    const errorMessage = 'Error occurred'
    const appError = new AppError(errorMessage)

    expect(appError.message).toEqual({ message: errorMessage })
    expect(appError.statusCode).toBe(500)
  })

  it('should create an instance of AppError with a custom status code', () => {
    const errorMessage = 'Not found'
    const statusCode = 404
    const appError = new AppError(errorMessage, statusCode)

    expect(appError.message).toEqual({ message: errorMessage })
    expect(appError.statusCode).toBe(statusCode)
  })
})
