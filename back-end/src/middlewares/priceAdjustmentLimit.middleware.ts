import { type Request, type Response, type NextFunction } from 'express'

const priceAdjustmentMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  req.products.forEach((product, index) => {
    if (product.sales_price * 0.9 > product.new_price) {
      req.products[index].validations.price_limite = 'lower'
    } else if (product.sales_price * 1.1 < product.new_price) {
      req.products[index].validations.price_limite = 'upper'
    } else {
      req.products[index].validations.price_limite = 'range'
    }
  })
  next()
}

export default priceAdjustmentMiddleware
