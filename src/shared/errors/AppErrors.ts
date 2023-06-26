export class AppError extends Error {
    public readonly message: string
    public readonly statusCode: number
  
    constructor (message: string, statusCode = 400) {
      super(message)
      this.statusCode = statusCode
    }
}
  
export class NotFoundException extends AppError {
    constructor (message: string) {
      super(message, 404)
    }
}