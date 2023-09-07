import { type ProductResponse } from '../../interfaces/products.interfaces.ts/index.ts'

declare global {
  namespace Express {
    interface Request {
      products: ProductResponse[]
    }
  }
}
