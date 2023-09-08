import { connection } from '../../database/index.ts'
import { type ProductResponse } from '../../interfaces/products.interfaces.ts'

const confirmUpdateProductsServices = async (products: ProductResponse[]): Promise<any[]> => {
  const query = 'UPDATE products SET sales_price = ? WHERE code = ?'
  for (const product of products) {
    const keys = [product.new_price, product.code]
    await new Promise<any>((resolve, reject) => {
      connection.query(query, keys, function (err, results) {
        if (err) {
          reject(err)
        } else {
          resolve(results)
        }
      })
    })
  }

  const codes = products.map(product => product.code)
  const sql = 'SELECT * FROM products WHERE code IN (?)'

  const result = await new Promise<any>((resolve, reject) => {
    connection.query(sql, [codes], (err, results) => {
      if (err) {
        reject(err)
        console.error('Erro ao executar a consulta: ' + err.message)
        return
      }
      resolve(results)
    })
  })

  return result.map((ele: ProductResponse, index: number) => ({
    ...ele,
    new_price: products[index].new_price,
    percent: products[index].percent
  }))
}
export default confirmUpdateProductsServices
