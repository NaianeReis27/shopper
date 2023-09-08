import { connection } from '../../database/index.ts'
import { type ProductResponse, type ProductWithPack, type Product } from '../../interfaces/products.interfaces.ts'

const promisifyQuery = async (query: string, values: any[]): Promise<any> => {
  return await new Promise<any>((resolve, reject) => {
    connection.query(query, values, (err, results) => {
      if (err) {
        reject(err)
        console.error('Erro ao executar a consulta: ' + err.message)
      } else {
        resolve(results)
      }
    })
  })
}

const updateSalesPrice = async (product: ProductResponse): Promise<any> => {
  const updateQuery = 'UPDATE products SET sales_price = ? WHERE code = ?'
  const updateValues = [product.new_price, product.code]
  await promisifyQuery(updateQuery, updateValues)
}

const getUpdatedProductsWithPack = async (codes: number[]): Promise<any> => {
  const selectQuery = ' SELECT packs.*, products.* FROM products LEFT JOIN packs ON packs.pack_id = products.code WHERE packs.pack_id IN (?) OR products.code IN (?)'
  const selectValues = [codes, codes]
  const results = await promisifyQuery(selectQuery, selectValues)
  return results
}

const updateSalesPricesBulk = async (productIds: any[], salesPrices: number[]): Promise<any> => {
  const bulkUpdateQuery = 'UPDATE products SET sales_price = ? WHERE code IN (?)'
  const bulkUpdateValues = [salesPrices, productIds]
  await promisifyQuery(bulkUpdateQuery, bulkUpdateValues)
}

const getProductsByCodes = async (codes: number[]): Promise<any> => {
  const selectQuery = 'SELECT * FROM products WHERE code IN (?)'
  const selectValues = [codes]
  const results = await promisifyQuery(selectQuery, selectValues)
  return results
}

const confirmUpdateProductsServices = async (
  updatedProducts: ProductResponse[]
): Promise<ProductResponse[]> => {
  const productCodes = updatedProducts.map((product) => product.code)

  for (const product of updatedProducts) {
    await updateSalesPrice(product)
  }

  const updatedProductDataWithPack = await getUpdatedProductsWithPack(productCodes)

  const productsWithoutNull = updatedProductDataWithPack.filter((productId: ProductWithPack) => productId.pack_id !== null)

  const productIdWithoutNull = productsWithoutNull.map((ele: { product_id: any }) => ele.product_id)

  if (productIdWithoutNull.length > 0) {
    const calculatedSalesPrices = productsWithoutNull.map(
      (data: ProductWithPack) => Number(data.sales_price) / data.qty
    )
    await updateSalesPricesBulk(productIdWithoutNull, calculatedSalesPrices)
  }

  const listProductsUpdated = await getProductsByCodes(productCodes)
  const mergedProducts = listProductsUpdated.map((ele: Product) => {
    const updatedProduct = updatedProducts.find((_ele: ProductResponse) => ele.code === _ele.code)
    if (updatedProduct) {
      return { ...ele, new_price: updatedProduct.new_price, percent: (updatedProduct.new_price - Number(updatedProduct.sales_price)) / Number(updatedProduct.sales_price) * 100, validation: updatedProduct.validations }
    }
    return ele
  })

  return mergedProducts.sort((a: { code: number }, b: { code: number }) => a.code - b.code)
}

export default confirmUpdateProductsServices
