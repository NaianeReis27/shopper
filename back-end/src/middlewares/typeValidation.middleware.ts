import { type Request, type Response, type NextFunction } from 'express'
import { AppError } from '../errors/AppErrors'
import { type ProductValid } from '../interfaces/products.interfaces.ts'
const typeValidationMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const errorArray: ProductValid[] = []
  const data: ProductValid[] = req.body
  data.forEach((ele) => {
    if (isNaN(ele.code)) {
      errorArray.push(ele)
    }
  })
  if (errorArray.length > 0) {
    throw new AppError(`Os campos product_code e new_price devem ser númericos:  ${JSON.stringify(errorArray)}`, 409)
  }
  next()
}

export default typeValidationMiddleware
