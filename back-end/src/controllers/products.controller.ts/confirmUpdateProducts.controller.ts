import { type Request, type Response } from 'express'
import confirmUpdateProductsServices from '../../services/products.services.ts/confirmUpdateProducts.services'

const confirmUpdateProductsControllers = async (req: Request, res: Response): Promise<any> => {
  try {
    const data = req.products
    const products = await confirmUpdateProductsServices(data)
    res.status(201).json(products)
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({
        message: error.message
      })
    }
  }
}
export default confirmUpdateProductsControllers
