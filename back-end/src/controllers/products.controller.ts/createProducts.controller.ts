import { type Request, type Response } from 'express'
import { type Product } from '../../interfaces/products.interfaces.ts'
import createProductsServices from '../../services/products.services.ts/createProducts.services'
const createProductsControllers = async (req: Request, res: Response): Promise<void> => {
  try {
    const { ...data } = req.body
    const products: Product = await createProductsServices(data)
    res.status(201).json(products)
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({
        message: error.message
      })
    }
  }
}
export default createProductsControllers
