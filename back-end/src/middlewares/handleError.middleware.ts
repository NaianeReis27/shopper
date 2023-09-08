import { type Request, type Response, type NextFunction } from 'express'
import { AppError } from '../errors/AppErrors'

const handleErrorMiddleware = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
): Response<any, Record<string, any>> => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      message: err.message
    })
  }
  return res.status(500).json({
    message: 'Internal server error'
  })
}

export default handleErrorMiddleware
