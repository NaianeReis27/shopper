import { type ProductResponse } from '../../interfaces/products.interfaces.ts'

const validListProductsServices = async (products: ProductResponse[]): Promise<any[]> => {
  return products.sort((a: { code: number }, b: { code: number }) => a.code - b.code)
}
export default validListProductsServices
