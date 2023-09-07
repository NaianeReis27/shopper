import { type Request, type Response } from 'express'
import validListProductsServices from '../../services/products.services.ts/validListProducts.services'

const validListProductsControllers = async (req: Request, res: Response): Promise<any> => {
  try {
    const data = req.products
    const products = await validListProductsServices(data)
    res.status(201).json(products)
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({
        message: error.message
      })
    }
  }
}
export default validListProductsControllers
