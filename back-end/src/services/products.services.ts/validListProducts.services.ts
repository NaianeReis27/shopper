import { type ProductResponse } from '../../interfaces/products.interfaces.ts'

const validListProductsServices = async (products: ProductResponse[]): Promise<any[]> => {
  console.log(products)
  return products
}
export default validListProductsServices
