import { type Request, type Response, type NextFunction } from 'express'

const priceAdjustmentMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  req.products.forEach((product, index) => {
    console.log('sales' + product.sales_price, 'new' + product.new_price, 1)
    if (product.sales_price * 0.9 > product.new_price) {
      req.products[index].validations.price_limite = 'lower'
    } else if (product.sales_price * 1.1 < product.new_price) {
      req.products[index].validations.price_limite = 'upper'
    }
  })

  next()
}

export default priceAdjustmentMiddleware
