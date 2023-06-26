import { type NextFunction, type Request, type Response } from 'express'
import { AppError } from '../../../errors/AppErrors'

export async function errorMiddleware (err: Error, request: Request, response: Response, next: NextFunction): Promise<Response> {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      message: err.message
    })
  }

  return response.status(500).json({
    status: 'error',
    message: `Internal server error - ${err.message}`
  })
}