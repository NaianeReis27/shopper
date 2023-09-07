import { type Request, type Response } from 'express'
import { AppError } from '../errors/AppErrors'

const handleErrorMiddleware = async (error: Error, req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      message: error.message
    })
  }
  return res.status(500).json({
    message: 'Internal server error'
  })
}

export default handleErrorMiddleware
